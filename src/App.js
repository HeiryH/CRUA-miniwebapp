import './App.css';
import Layout from './Layout';
import Header from './component/Header';
import Post from './component/Post';
import { Routes, Route } from 'react-router-dom';
import PostPage from './views/PostPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import { UserContextProvider } from './UserContext';
import NewPost from './views/NewPost';
import SinglePost from './views/SinglePost';
import EditPost from './views/EditPost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route element={<Layout/>}>

      <Route index element={<PostPage />}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/createpost' element={<NewPost/>}/>
      <Route path='/post/:id' element={<SinglePost/>}/>
      <Route path='/edit/:id' element={<EditPost/>}/>

      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
