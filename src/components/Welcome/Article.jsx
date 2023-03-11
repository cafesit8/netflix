import React from "react";

export function Article({ h2, p, img }) {
  return (
    <>
      <div className="w-[50%] max-[700px]:w-full">
        <h2 className="text-[40px] font-bold max-[500px]:text-[30px]">{h2}</h2>
        <p className="text-white text-[17px] max-[500px]:text-[15px]">{p}</p>
      </div>
      <picture className="w-[50%] h-full max-[700px]:w-full">
        <img className="w-full h-full object-contain" src={img} />
      </picture>
    </>
  );
}
