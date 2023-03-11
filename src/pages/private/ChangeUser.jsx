import React, { useContext } from 'react'
import img2 from '../../img/avatarNetflix.png'
import addUser from '../../img/addUser.png'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
//import img2 from '../../img/avatarNetflix.png'

export default function ChangeUser() {
    const {user, newUser, selectedUser} = useContext(Context)

    const handleChange=()=>{
      const useSelected = {
        userName: user.displayName,
        color: user.reloadUserInfo.photoURL || user.userPhoto
      }
      selectedUser(useSelected)
    }

  return (
    <section className='bg-[#1b1b1b] text-white w-full h-screen flex flex-col items-center justify-center'>
      <h2 className='text-[30px] mb-5 text-center'>¿Quién está viendo ahora?</h2>
      <article className='w-full max-[930px]:w-[90%] flex justify-center gap-10 max-[745px]:flex-wrap'>
        <Link to='/home'>
            <div onClick={handleChange} className='w-[150px] cursor-pointer h-full max-[930px]:w-[100px]'>
                <img className='' src={img2} />
                <p className='text-center mt-3'>{user.displayName || 'Usuario'}</p>
            </div>
        </Link>
        {
            newUser.map(user => (
                <Link key={user.color} to='/home'>
                  <div onClick={()=>selectedUser(user)} className='w-[150px] cursor-pointer h-full max-[930px]:w-[100px]'>
                    <img alt='' src={user.color} />
                    <p className='text-center mt-3'>{user.userName}</p>
                  </div>
                </Link>
            ))
        }
        {
          newUser.length == 3 ?
          null :
          <Link to='/createUser'>
            <div className='w-[150px] grid place-content-center h-full max-[930px]:w-[100px]'>
                <img className='w-full cursor-pointer' src={addUser} />
            </div>
          </Link>
        }
      </article>
    </section>
  )
}
