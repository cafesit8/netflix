export function CardPresentation({ children }) {
  return (
    <div className="absolute degradate w-full h-screen flex items-center z-10">
      <article className="w-[70%] ml-[5%] max-[500px]:w-full max-[500px]:ml-0 max-[500px]:p-4 z-30">
        {children}
      </article>
    </div>
  );
}
