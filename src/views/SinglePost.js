import { useEffect, useState, useContext } from "react";
import { format } from 'date-fns';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from "../UserContext";

export default function SinglePost() {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://crud-miniwebproject-7340dd192120.herokuapp.com/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                })
            });
    }, [])

    if (!postInfo) return '';
    return (
        <div className="max-w-2xl m-auto">
            <div className="flex flex-row justify-between items-end">
                <h1 className="text-3xl font-bold">{postInfo.title}</h1>
            <div>    <p>{format(new Date(postInfo.createdAt), 'MMM d yyyy HH:mm')}</p>
            {userInfo.id === postInfo.author._id && (
                    <div>
                        <Link className="p-[0.5px] rounded drop-shadow-lg border-solid border-2 hover:bg-indigo-400" to={`/edit/${postInfo._id}`}>
                            Edit post
                        </Link>
                    </div>
                )}
                </div>
            </div>
            <img className="object-contain py-3"src={`https://crud-miniwebproject-7340dd192120.herokuapp.com/${postInfo.cover}`} alt="" />
            <div className="flex flex-row justify-between border-b-2">
                <p className="text-lg font-semibold">{postInfo.summary}</p>
                <p>{postInfo.author.username}</p>
            </div>
                <p dangerouslySetInnerHTML={{__html:postInfo.content}}></p>
        </div>
    )
}