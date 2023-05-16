import React from "react";

export function Btn({ text }) {
  return (
    <button className="bg-[#e50914] py-1 px-4 text-[16px] text-white rounded-lg max-[600px]:w-[50%]">
      {text}
    </button>
  );
}
