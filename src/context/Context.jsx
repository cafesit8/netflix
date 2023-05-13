import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useRef, useState } from 'react'
import {auth} from '../firebase/firebase'
import { v4 } from 'uuid'

export const Context = createContext()

export function ContextProvider({children}) {
  const [user, setUser] = useState(null)
  const [userList, setUserList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true)
  const refUserName = useRef(null)

  const addUserToTheList = (data) => {
    setUserList([
      ...userList,
      {
        userName: data.userName,
        photo: data.photo,
        id: v4(),
      },
    ]);
  }

  // registro
  const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

  // Inicio de sesión
  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

  //Inicio de sesión con google
  const loginWithGoogle=()=>{
    const googlePRovider = new GoogleAuthProvider()
    return signInWithPopup(auth, googlePRovider)
  }

  //cierre de sesion
  const logOut = async () => {
    await signOut(auth)
    localStorage.removeItem('homePage')
  }

  useEffect(()=>{
      const userName = JSON.parse(localStorage.getItem('userName'))
      refUserName.current = userName
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setPhoto({
          photo: currentUser.photoURL,
          userName: currentUser.displayName || refUserName.current || 'usuario',
        })
        setLoading(false)
      })
  }, [])

  return (
    <Context.Provider value={{
      singUp,
      user,
      logIn,
      loading,
      loginWithGoogle,
      logOut,
      photo,
      addUserToTheList,
      userList,
      setPhoto,
      refUserName,
      setUserList,
    }}>
      {children}
    </Context.Provider>
  )
}
