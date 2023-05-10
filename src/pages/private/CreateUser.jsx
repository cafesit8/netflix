import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../context/Context";

//avatar
import azul from "../../img/avatarNetflixAzul.jpg";
import amarillo from "../../img/avatarNetflixAmarillo.jpg";
import verde from "../../img/avatarNetflixVerde.jpg";

export default function CreateUser() {
  const { addUserToTheList } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handleSubmitForm = (data) => {
    addUserToTheList(data)
    navigate("/netflix/changeUser");
  };

  return (
    <section className="bg-[#1b1b1b] w-full h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-[500px] flex flex-col gap-5 bg-[#292929] px-4 py-6 max-[520px]:w-[90%]"
      >
        <h3 className="text-white text-[30px] text-center">Crear Usuario</h3>
        <div>
          <input
            name="userName"
            className="bg-transparent border py-2 px-4 w-full rounded-md"
            placeholder="Nombre de Usuario"
            {...register("userName", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.userName?.type === "required" && (
            <span className="text-red-500 ml-1">Este campo es requerido</span>
          )}
          {errors.userName?.type === "minLength" && (
            <span className="text-red-500 ml-1">Mïnimo son 5 carateres</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Elige color del Avatar:</label>
          <select
            name="color"
            className="bg-[#292929] border outline-none text-white rounded-lg py-2 px-3"
            {...register("color")}
          >
            <option value={azul}>Azul</option>
            <option value={amarillo}>Amarillo</option>
            <option value={verde}>Verde</option>
          </select>
        </div>
        <button className="bg-[#e50914] py-2 rounded-lg">
          Guardar Usuario
        </button>
        <Link
          to="/netflix/home"
          className="text-red-400 underline text-end text-lg"
        >
          Volver al Inicio
        </Link>
      </form>
    </section>
  );
}
