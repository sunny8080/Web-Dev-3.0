import { useEffect, useState } from 'react'
import './App.css'
import fetchingImg from './assets/data-fetching.png'
import BlogPosts, { BlogPost } from './Components/BlogPosts';
import ErrorMsg from './Components/ErrorMsg';
import { httpGet, httpGetZod } from './utils/http';
import { z } from 'zod';

type RawBlogPostData = {
  id: number,
  userId: number,
  title: string,
  body: string
}


const rawBlogPostDataSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string()
});

// z.array() is a Zod method that creates a new schema based on another schema
// as the name suggests, it's simply an array containing the expected objects
const expectedBlogPostDataSchema = z.array(rawBlogPostDataSchema);

const postsGetUrl = 'https://jsonplaceholder.typicode.com/posts';



function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);

      try {
        // const data = await httpGet<RawBlogPostData[]>(postsGetUrl);
        const data = await httpGetZod<RawBlogPostData[]>(postsGetUrl, expectedBlogPostDataSchema);

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        })
        setPosts(blogPosts);
        setError("");
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
        setError("Failed to fetch blogs !!");
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, [])


  return (
    <div className='app'>
      <img src={fetchingImg} className='fetching-image' alt="An abstract image depicting a data fetching process." />

      <div>
        {
          error && <ErrorMsg error={error} />
        }

        {
          isFetching && <p id='loading-fallback'>Fetching Blogs ...</p>
        }

        {
          posts && posts.length && <BlogPosts posts={posts} />
        }
      </div>

    </div>
  )
}

export default App
