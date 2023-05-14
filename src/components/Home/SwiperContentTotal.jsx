import { Suspense, lazy } from 'react';
const Swiper = lazy(() => import('./Swiper'))

export default function({images, title}) {
  const values = Object.values(images)
  return (
    <div className="w-[1500px] max-[1500px]:w-[92%] m-auto max-[420px]:mr-0">
      <h2 className="text-[25px] mb-3 max-[500px]:text-[20px]">
        {title}
      </h2>
      <div className="flex w-full relative m-auto h-[350px] max-[850px]:h-[250px] max-[370px]:h-[230px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Swiper values={values} />
        </Suspense>
      </div>
    </div>
  );
}
