import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './container/Home';
import Post from './container/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  Component={Home}/>
        <Route path="/post/:id" element={<Post />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
