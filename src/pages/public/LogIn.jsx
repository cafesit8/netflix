import { useContext, useState } from "react";
import "../../styles/Public/login.css";
import { Btn } from "../../components/Btn";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Login/Input";
import {FcGoogle} from 'react-icons/fc'

export function LogIn() {
  const navigate = useNavigate();
  const { logIn, user, loginWithGoogle } = useContext(Context);
  const [error, setError] = useState();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      await logIn(userForm.email, userForm.password);
      navigate("/netflix/home");
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/user-not-found).")
        setError("Usuario no encontrado");
      if (error.message === "Firebase: Error (auth/wrong-password).")
        setError("Contraseña mal ingresada");
    }
  };

  const loginGoogle=async()=>{
    await loginWithGoogle()
    navigate('/netflix/home')
  }

  return (
    <section className="login w-full h-screen flex flex-col items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-black/60 flex flex-col rounded-lg gap-5 p-4 max-[500px]:w-[90%] relative z-10"
      >
        <h3 className="text-center text-[25px]">Inicio de Sesión</h3>
        <Input handle={handleChange} type="email" name="email" place='Ingrese su correo' />
        <Input handle={handleChange} type="password" name="password" place='Contraseña' />
        {error && <span className="text-[15px] text-red-500">{error}</span>}
        <Btn text="Iniciar Sesión" />
        <button onClick={loginGoogle} className="bg-[#e50914] py-1 px-4 text-[16px] flex rounded-lg justify-center items-center">Inicia con tu cuenta <FcGoogle className="text-[25px] ml-2"/></button>
      </form>
      <div className="shadow"></div>
    </section>
  );
}
