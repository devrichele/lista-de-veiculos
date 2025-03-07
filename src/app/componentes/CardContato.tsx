   
    
    interface PropsCardContato {
    nome: string;
    email: string;
    telefone: string;
    onClickClose:()=>void;
   }


   const CardContato = ({nome, email, telefone, onClickClose } :PropsCardContato ) => {
    
        return(
            <div onClick={onClickClose} className="absolute w-screen h-screen bg-black/50 top-0 flex justify-center items-center">
                <div className="bg-white p-6 md:p-10 w-full max-w-md rounded-lg shadow-lg">
                <h1 className="text-xl font-semibold text-gray-800">{nome}:</h1>
                <p className="text-gray-600">{email}</p>
                <p className="text-gray-600">{telefone}</p>
                </div>

            </div>
        );
    }
    export default CardContato;