import { Icon } from "@iconify/react";
export default function Search(){
    return (
      <div className="flex hover:text-cyan-500">
        <div className="hover:text-black">
        <input
        type="text"
        name="title"
        placeholder="Search Artists"
        className="w-96 px-4 py-2 border-b-2 shadow-md border-gray-300 rounded-2xl focus:outline-none hover:border-cyan-500 hover:shadow-cyan-200" 
      />
        </div>
      <Icon icon="material-symbols:search" className="mt-2 text-3xl"/>
      </div>
        
    );
}