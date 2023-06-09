import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useRef, useState } from 'react'
import {auth, db} from '../firebase/firebase'
import { v4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'

export const Context = createContext()

export function ContextProvider({children}) {
  const [user, setUser] = useState(null)
  const [userList, setUserList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true)
  const refUserName = useRef(null)
  const [images, setImages] = useState(null);
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    const dataHomePage = JSON.parse(localStorage.getItem("homePage"));
    if (dataHomePage !== null) {
      setImages(dataHomePage);
    } else {
      console.log('se hizo la petición')
      const queryCollection = collection(db, "homePage");
      getDocs(queryCollection).then((res) => {
        const results = res.docs.map((item) => ({
          ...item.data(),
        }));
        setImages(results);
        localStorage.setItem("homePage", JSON.stringify(results));
      });
    }
  }, []);

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
      setImages,
      images,
      toogle,
      setToogle
    }}>
      {children}
    </Context.Provider>
  )
}
