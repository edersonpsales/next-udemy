import { useState } from "react";
import Filho from "./Filho";

export default function Pai(props){
    const [msg, setMsg] = useState('');

    function falarComigo(msg){
        setMsg(msg);
    }

    return (
        <div>
            <Filho funcao={falarComigo}/>
            <h1>{msg}</h1>
        </div>
    )
}