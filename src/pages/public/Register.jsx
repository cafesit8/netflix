import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Btn } from "../../components/Btn";
import { Input } from "../../components/Login/Input";
import { Context } from "../../context/Context";

export function Register() {
  const { singUp, user } = useContext(Context);
  const [error, setError] = useState();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
      await singUp(userForm.email, userForm.password);
      navigate("/netflix/login");
    } catch (error) {
      if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      )
        setError("Contraseña debe tener mínimo 6 caracteres");
      if (error.message === "Firebase: Error (auth/email-already-in-use).")
        setError("Correo ya está en uso");
    }
  };

  return (
    <section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-gray-600/25 flex flex-col gap-5 p-4 max-[500px]:w-[90%]"
      >
        <h3 className="text-center text-[25px]">Registrate con Nosotros</h3>
        <Input handle={handleChange} type="email" name="email" place='Ingrese correo' />
        <Input handle={handleChange} type="password" name="password" place='Ingrese contraseña' />
        <Btn text="Registrar" />
        {error && (
          <span className="text-center text-red-500 text-[15px]">{error}</span>
        )}
        <Link to='/' className="text-red-500 underline text-end text-lg cursor-pointer">Volver</Link>
      </form>
    </section>
  );
}
