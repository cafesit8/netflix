import { async } from '@firebase/util'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'

export const Context = createContext()

export function ContextProvider(props) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [newUser, setNewUser] = useState([])
  const [userSelected, setUserSelected] = useState()

  //user seleccionado
  const selectedUser=(userSelected)=>{
    setUserSelected(userSelected)
  }

  //capturar el usuario nuevo recién creado
  const addNewUserLocalStorage = (data)=>{
    //console.log(data)
    setNewUser([...newUser, data])
  }

  // registro
  const singUp=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Inicio de sesión
  const logIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  //Inicio de sesión con google
  const loginWithGoogle=()=>{
    const googlePRovider = new GoogleAuthProvider()
    return signInWithPopup(auth, googlePRovider)
  }

  //cierre de sesion
  const logOut= async()=>{
    await signOut(auth)
    setNewUser([])
    setUserSelected()
  }

  useEffect(()=>{
      onAuthStateChanged(auth, (currentUSer)=>{
        setUser(currentUSer)
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
      setNewUser,
      addNewUserLocalStorage,
      newUser,
      selectedUser,
      userSelected
    }}>
      {props.children}
    </Context.Provider>
  )
}
