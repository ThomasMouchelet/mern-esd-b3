import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FormPost from './app/modules/post/FormPost';
import PostsList from './app/pages/post/PostsList';
import FormSignin from './app/modules/auth/FormSignin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<FormSignin />} />
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/new" element={<FormPost />} />
        <Route path="/posts/:id" element={<FormPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;