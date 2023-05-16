export default function({recomendations}) {
  return (
    <section className="w-full p-5 h-auto bg-black text-white">
      <h3 className="mb-2 text-2xl max-[600px]:text-[15px]">Recomendados para ti:</h3>
      <article className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[450px]:grid-cols-1">
        {recomendations?.map((item) => (
          <div className="cursor-pointer" key={item.title}>
            <img fetchpriority="low" alt={item.title} src={item.imageSmall} />
          </div>
        ))}
      </article>
    </section>
  );
}
