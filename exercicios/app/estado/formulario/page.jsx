'use client'

import { useState } from "react"

export default function formulario(){

    const [valor, setValor] = useState('')

    function atualizar(e){
        setValor(e.target.value)
    }

    return (
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} onChange={atualizar}/>
        </div>
    )
}