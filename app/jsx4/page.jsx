export default function xpto(){
    const subtitulo = 'estou no JSX'
    
    return (
        <div>
            <h1>
                Integração JS e JSX
            </h1>
            <h2>
                {subtitulo}
            </h2>
            <h3>{3*3}</h3>
            <h3>{entre(30,1,10)}</h3>
            <h4>{teste()}</h4>
        </div>
    )
}

export  function teste(){
    return (
        <div>teste ederson prado</div>
    )
}

function entre(valor, min, max){
    if (valor >= min && valor <= max){
        return "sim"
    }else{
        return "nao"
    }
}