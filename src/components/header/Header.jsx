//importando css
import './Header.css'

//importando imagem
import logo from '../../assets/logo.jpg'

//importando o contextApi 
import { TemaContext, useTemaContext } from '../../contexts/tema'

//criando componente header
export default function Header({ user }) {

    const { tema, setTema } = useTemaContext()

    console.log({ tema })
    return (
        <div className='header'>
            {/* <TemaContext.Consumer>
                {
                    ({ tema, setTema }) => {
                        <>
                            <div>
                                <button onClick={() => setTema("Preto")}>Escuro</button>
                                <button onClick={() => setTema("Branco")}>Claro</button>
                            </div>
                            <p>{tema} </p>
                        </>
                    }
                }
            </TemaContext.Consumer> */}



            <img src={logo} alt="logo da empresa" className='logo' />
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Cards</li>
                    <li>Formulario</li>
                </ul>
            </nav>

            <p>{user}</p>

            <div className={`tema-${tema}`}>
                <button onClick={() => setTema("Preto")}>Escuro</button>
                <button onClick={() => setTema("Branco")}>Claro</button>
            </div>
            <p>{tema}</p>

        </div>
    )
}