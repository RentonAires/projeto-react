import { useState } from "react"

export default function form2 (){
    const [Formulario, setFormulario] = useState({
        nome:"",
        email:""
    })
    return(
        <>
        <form action="">
            <div>
                <label htmlFor="">Nome</label>
                <input type="text" name=""/><br />

                <label htmlFor="">E-mail</label>
                <input type="text" name="" />
            </div>
        </form>
        </>
    )
}