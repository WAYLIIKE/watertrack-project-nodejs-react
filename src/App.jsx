import { Route, Routes } from 'react-router-dom';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return <Routes></Routes>;
}
export default App;
