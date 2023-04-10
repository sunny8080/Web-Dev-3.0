import './App.css';
import RandomGif from './components/RandomGif';
import TagGif from './components/TagGif';

function App() {
  return (
    <div className=" w-full h-screen flex flex-col items-center background overflow-x-hidden">
      <h1 className='mt-10 bg-white w-11/12 rounded-xl text-center p-4 text-xl lg:text-3xl font-bold'>
        RANDOM GIFs
      </h1>


      <div className='flex flex-col w-full items-center gap-y-10 my-8'>
        <RandomGif />
        <TagGif />
      </div>

    </div>
  );
}

export default App;
