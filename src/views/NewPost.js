import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import Editor from '../component/Editor';

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState('')
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    try{
      const response = await fetch('https://crud-miniwebproject-7340dd192120.herokuapp.com/post', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (response.status === 200) {
        setRedirect(true);
      }

    }catch(err){
      alert('error, restart server')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className='max-w-xl m-auto'>
      <form action="" onSubmit={createNewPost}>
        <input type="title" placeholder={"Title"} value={title} onChange={e => setTitle(e.target.value)} />
        <input type="summary" placeholder={"Summary"} value={summary} onChange={e => setSummary(e.target.value)} />
        <input type="file" onChange={e => setFiles(e.target.files)} />

        <Editor onChange={setContent} value={content} />

        <button> Post It </button>
      </form>
    </div>
  )
}