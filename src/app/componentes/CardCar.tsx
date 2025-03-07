'use client'


import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import React, {useState} from "react"


interface PropsCard {
  titulo: string;
  descrição:string;
  valor:string;
  imagem:string;
  data:string;
  localização:string;
  onClickContato:()=>void;

}

const CardCar  = ({titulo, descrição, valor, imagem, data, localização, onClickContato}: PropsCard) => {
  const [favorito, setFavorito]= useState(false);

  return (
    <div className="w-[200px] h-[400px] border rounded-lg flex flex-col overflow-hidden">
      <div className="relative">
        <img src={imagem} alt="imagem" className="w-full h-[180px] object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[18px]">{titulo}</h1>
            <p className="text-[10px]">{descrição}</p>
          </div>
          <button onClick={()=> setFavorito(!favorito)}>
            {favorito ? <MdFavorite color="red"/> : <MdFavoriteBorder />}
          </button>
        </div>

        <h1 className="text-[20px] font bold my-3 text-black mb-4"> {valor}</h1>

      <div className="flex justify-between text-[10px]">
        <a href={`https://www.google.com/maps/search/${localização}`} target="_blank" className="text-blue-500 hover:underline">
            {localização} 
        </a>
        <p>{data}</p>
      </div>

        <div className="flex justify-start">
        <button onClick={onClickContato} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm transition-colors">
            Contato
          </button>
        </div>
      </div>
    </div>
  );
};

      
      



export default CardCar;