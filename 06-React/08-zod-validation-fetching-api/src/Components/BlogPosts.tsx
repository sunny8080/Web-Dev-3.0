export type BlogPost = {
  id: number,
  title: string,
  text: string
}

type BlogPostsProps = {
  posts: BlogPost[]
}


const BlogPosts = ({ posts }: BlogPostsProps) => {

  return (
    <div id="blog-posts">
      <h1>Blog Posts</h1>
      <div>
        {
          posts && posts.length ?
            (
              <ul>
                {
                  posts.map(blog => {
                    return (
                      <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.text}</p>
                      </li>
                    )
                  })
                }
              </ul>
            )
            :
            (
              <p>No Blog post found !!</p>
            )
        }
      </div>
    </div>
  )
}

export default BlogPosts
