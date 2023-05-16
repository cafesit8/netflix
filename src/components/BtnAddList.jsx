import {HiPlus} from 'react-icons/hi'

export default function BtnAddList({text}) {
  return (
    <button className="bg-white border py-1 px-4 text-[16px] text-black font-medium rounded-lg flex gap-2 items-center justify-center max-[600px]:w-[50%]">
      {<HiPlus/>}{text}
    </button>
  )
}
