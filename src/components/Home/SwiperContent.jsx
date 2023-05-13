export function SwiperContent({ img }) {
  return (
    <div className="w-full h-full cursor-pointer hover:scale-105 duration-150">
      <img
        width="100%"
        height="100%"
        fetchpriority="low"
        alt={img}
        className="object-cover w-full h-full"
        src={img}
      />
    </div>
  );
}
