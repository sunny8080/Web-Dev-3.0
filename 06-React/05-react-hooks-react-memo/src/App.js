import './App.css';
import UseReducerEx from './components/UseReducerEx';
import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import ReactMemoEx from './components/ReactMemoEx';
import UseRefEx from './components/UseRefEx';

function App() {
  return (
    <div className="">
      <div>
        <h1>useReducer example</h1>
        <UseReducerEx />
      </div>

      <div>
        <h1>useMemo example</h1>
        <UseMemoEx />
      </div>

      <div>
        <h1>useCallback example</h1>
        <UseCallbackEx />
      </div>


      <div>
        <h1>React memo example</h1>
        <ReactMemoEx />
      </div>

      <div>
        <h1>useRef example</h1>
        <UseRefEx />
      </div>

    </div>
  );
}

export default App;
