
export default function Filho(props){
    
    function enviarMsg(msg){
        props.funcao(teste)
    }

    return (
        <div>
            <h1>Filho</h1>
            <button onClick={e => props.funcao('passei no vestibular')}>Falar com pai</button>
            <button onClick={e => props.funcao('')}>Desdizer com pai</button>
        </div>
    )
}