import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Context } from "../../context/Context";

//avatar
import azul from "../../img/avatarNetflixAzul.jpg";
import amarillo from "../../img/avatarNetflixAmarillo.jpg";
import verde from "../../img/avatarNetflixVerde.jpg";

export default function CreateUser() {
  const { addUserToTheList, userList } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userFound, setUserFound] = useState({
    userName: '',
    photo: '',
    id: ''
  });

  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    if(id){
      const found = userList.find(user => user.id === id)
      setUserFound(found)
    }
  }, [])

  const handleSubmitForm = (data) => {
    if(id){
      const found = userList.find(user => user.id === id)
      found.userName = data.userName
      found.photo = data.photo
    }else{
      addUserToTheList(data)
    }
    navigate("/changeUser");
  };

  return (
    <section className="bg-[#1b1b1b] w-full h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-[500px] flex flex-col gap-5 bg-[#292929] px-4 py-6 max-[520px]:w-[90%]"
      >
        <h3 className="text-white text-[30px] text-center">{id ? 'Editar Usuario' : 'Crear Usuario'}</h3>
        <div>
          <input
            defaultValue={userFound?.userName}
            name="userName"
            className="bg-transparent border py-2 px-4 w-full rounded-md"
            placeholder="Nombre de Usuario"
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 10
            })}
          />
          {errors.userName?.type === "required" && (
            <span className="text-red-500 ml-1">Este campo es requerido</span>
          )}
          {errors.userName?.type === "minLength" && (
            <span className="text-red-500 ml-1">Mïnimo son 3 carateres</span>
          )}
          {errors.userName?.type === "maxLength" && (
            <span className="text-red-500 ml-1">Máximo son 10 carateres</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Elige color del Avatar:</label>
          <select
            defaultValue={azul}
            name="color"
            className="bg-[#292929] border outline-none text-white rounded-lg py-2 px-3"
            {...register("photo")}
          >
            <option selected={userFound?.photo === azul} value={azul}>Azul</option>
            <option selected={userFound?.photo === amarillo} value={amarillo}>Amarillo</option>
            <option selected={userFound?.photo === verde} value={verde}>Verde</option>
          </select>
        </div>
        <button className="bg-[#e50914] py-2 rounded-lg">
          {id ? 'Actualizar' : 'Guardar'}
        </button>
        <Link
          to="/home"
          className="text-red-400 underline text-end text-lg"
        >
          Volver al Inicio
        </Link>
      </form>
    </section>
  );
}
