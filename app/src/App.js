import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostsList from './components/PostsList';
import FormPost from './components/FormPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/new" element={<FormPost />} />
        <Route path="/posts/:id" element={<FormPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;