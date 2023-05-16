
export default function CardView({children}) {
  return (
    <div className="absolute degradate w-full h-screen flex items-center z-10 max-[600px]:relative max-[600px]:h-auto">
      <article className="w-[60%] ml-[5%] max-[600px]:w-full max-[600px]:ml-0 max-[600px]:p-4 z-30 ">
        {children}
      </article>
    </div>
  )
}
