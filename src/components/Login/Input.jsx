import React from "react";

export function Input({ handle, type, name, place }) {
  return (
    <div className="w-full">
      <input
        onChange={handle}
        type={type}
        name={name}
        className="w-full py-2 px-4 rounded-lg bg-gray-700"
        autoComplete="false"
        placeholder={place}
      />
    </div>
  );
}
