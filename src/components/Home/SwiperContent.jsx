
export function SwiperContent({img}) {
  return (
    <div className='w-full h-full'>
        <img width='100%' height='100%' fetchpriority='low' alt={img} className='object-cover w-full h-full' src={img} />
    </div>
  )
}
