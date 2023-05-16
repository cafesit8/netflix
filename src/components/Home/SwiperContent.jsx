import { useNavigate } from "react-router-dom";

export function SwiperContent({ img }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${img.title}`);
  return (
    <div
      onClick={handleClick}
      className="w-full h-full cursor-pointer hover:scale-105 duration-150"
    >
      <img
        width="100%"
        height="100%"
        fetchpriority="low"
        alt={img.portada}
        className="object-cover w-full h-full"
        src={img.portada}
      />
    </div>
  );
}
