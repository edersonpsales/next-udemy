export default function SomentePar(props){
    return props.numero % 2 === 0 ? <span>{props.numero}</span> : null
    
    // if(props.numero % 2 === 0){
    //     return <h1>{props.numero}</h1>
    // }else{
    //     return null
    // }
}