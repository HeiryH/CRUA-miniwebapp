import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext";

export default function Header() {
  const {userInfo, setUserInfo} = useContext(UserContext)
  useEffect(() => {
    fetch('https://crud-miniwebproject-7340dd192120.herokuapp.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logOut() {
    fetch('https://crud-miniwebproject-7340dd192120.herokuapp.comhttp://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }

  const username =userInfo?.username
  return (
    <header className="flex flex-row justify-between align-middle max-w-2xl m-auto items-center px-3 mb-12 my-2">
      <Link to="/" className="text-xl font-bold hover:text-2xl">Post It</Link>

      <nav>
        {username && (
          <>
            <Link className="p-1 rounded drop-shadow-lg border-solid border-2 hover:bg-teal-400" to="/createpost"> New Post </Link>
            <Link className="p-1 rounded drop-shadow-lg border-solid border-2 hover:bg-red-400" onClick={logOut} to='/login'> Logout </Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="p-1 rounded drop-shadow-lg border-solid border-2 hover:bg-slate-400"> Login </Link>
            <Link to="/register" className="p-1 rounded drop-shadow-lg border-solid border-2 hover:bg-slate-400"> Register </Link>
          </>
        )}
      </nav>

    </header>
  )
}