import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({ _id,title, summary, cover, content, createdAt, author }) {
  return (
    <div className="max-w-2xl m-auto p-3 rounded drop-shadow-lg hover:drop-shadow-2xl border-solid border-2 my-8">
      <Link to={`/post/${_id}`}>
      <h3 className="font-semibold"> {title}</h3>
      </Link>
      <Link to={`/post/${_id}`}>
      <img className="my-3" src={'https://crud-miniwebproject-7340dd192120.herokuapp.com/' + cover} alt="" />
      </Link>
      <div className="flex flex-row justify-between">
        <p>{author.username}</p>
        <p>{format(new Date(createdAt), 'MMM d yyyy HH:mm')}</p>
      </div>
      <p>{summary}</p>
    </div>
  )
}