import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'

export const Context = createContext()

export function ContextProvider(props) {
  const [user, setUser] = useState(null)
  const [userList, setUserList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true)

  const addUserToTheList = (data) => {
    setUserList([
      ...userList,
      {
        userName: data.userName,
        photo: data.color,
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
  const logOut = async () => await signOut(auth)

  useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setPhoto({
          photo: currentUser.photoURL,
          userName:  currentUser.displayName,
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
    }}>
      {props.children}
    </Context.Provider>
  )
}
