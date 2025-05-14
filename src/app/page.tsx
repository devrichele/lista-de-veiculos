"use client"

import { BiSearch } from "react-icons/bi";
import CardCar from "./componentes/CardCar";
import CardContato from "./componentes/CardContato";
import React, { useEffect , useState } from "react";

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default function Home() {


  const [searchValue, setSearchValue] = useState('');
  const [contato, setContato] = useState(false);
  const [vendedor, setVendedor] = useState<null | any>(null);
  const [data, setData] = useState<any[]>([]);
  const [dataOriginal, setDataOriginal] = useState <any[]>([])
  

  const getCars = async () =>{
    const response = await fetch('/api/cars');
    const dataResponse = await response.json();
    
    setData(dataResponse);
    setDataOriginal(dataResponse);
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setData(dataOriginal);

    } else {
     const listaDeCarrosFiltrada = data.filter((item) => item.model.toLowerCase().includes(searchValue.toLowerCase()));
      setData(listaDeCarrosFiltrada);
    }
 }, [searchValue])
  
  function botaoContato (item:any){
      setContato (!contato)
      setVendedor(item)
    }
    
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex justify-between items-center">
          <h1 className="text-orange-500 font-bold">Icarros</h1>
          <div className="border flex items-center rounded-lg p-2 gap-2 w-60 bg-white">
            <BiSearch />
            <input onChange={(event) => setSearchValue(event.target.value)}
              className="text-sm border-0 shadow-none outline-none w-full"
              type="text"
              placeholder="Busque por marca"
            />
          </div>
          </div>
      </div>

      <div className="border-t border-gray-300 my-8 shadow-sm"></div>

      <div className="p-4 gap-4 flex justify-center w-full">
        {data.map((item, index) => (
          <CardCar
            key={index}
            titulo={item.model}
            descrição={item.version}
            valor={item.price}  
            imagem={item.image}
            data={item.seller.date}
            localização={item.seller.location}
            onClickContato={()=>botaoContato(item.seller.contact)}

          />
        ))}
      </div>

           { contato ? (<CardContato
            nome={vendedor.name} 
            email={vendedor.email}
            telefone={vendedor.phone}
            onClickClose={()=> setContato(false)}
              />
               ): null}   
    </div>
  );
}

