//importando o contexto
import { createContext, useContext, useState } from "react";

//criando a criando a funçao de contexto
const TemaContext = createContext();

//exemplo para construçao do um conntexto
// const UserProvider = ({ children }) => {
//     const name = "Maria";
   
//     return (
//       <UserContext.Provider value={{ name }}>
//         {children}
//       </UserContext.Provider>
//     );
//    }
   
//contruindo um provider essa estrutura e sempre a mesma
//o que muda e so o estatdo

const TemaProvider = ({children}) => {
    const [tema, setTema] = useState("branco")


    return(
        <TemaContext.Provider value={
            {tema, setTema}
        }>
            {children}
        </TemaContext.Provider>
    )
}

//criando um hookn para usar o contexto
const useTemaContext = () => {
    return useContext(TemaContext)
}

export{
    TemaContext,
    TemaProvider,
    useTemaContext

}