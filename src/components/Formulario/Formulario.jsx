import './formulario.css'
import { useState } from "react"

//customhooks
const useInput = (initialValue = "") => {

    const [input, setInput] = useState(initialValue)

    function onChange(e) {

        setInput(e.target.valeu)
    }

    return [input, onChange]

}

export default function Fromulario() {
    //estados do formulario
    const [usuario, setUsuario] = useState("");
    console.log({ usuario })

    const [email, setEmail] = useState("");
    console.log({ email });

    const [telefone, setTelefone] = useState("");
    console.log({ telefone })

    const [area, setArea] = useState("");
    console.log({area});



    //funçao para cadastra usuario
    function cadastrar(e) {
        e.prevntDefault()
        //window.localStorage.setItem("usario", JSON.stringify(user))
        //
    }

    return (
        <div className="form">
            <section>
                <fieldset>

                    <form onSubmit={cadastrar} className>
                        <label>Nome</label>
                        <input type="text" valeu={usuario} id="usuario" onChange={(e) => setUsuario(e.target.value)} /><br />

                        <label>Email</label>
                        <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} /><br />

                        <label>Telefone</label>
                        <input type="text" value={telefone} id="telefone" onChange={(e) => setTelefone(e.target.value)} /><br />

                        <label>Texto</label>
                        <textarea value={area} id="area" cols="30" rows="10" onChange={(e) => setArea(e.target.value)}></textarea><br />
                        <button type="submit">Enviar</button>
                    </form>

                </fieldset>
            </section>
        </div>


    )
}