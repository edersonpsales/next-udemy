function gerarLista(){
    const lista = [
        <span>1</span>,
        <span>2</span>,
        <span>3</span>
    ]
    return lista;
}

export default function lista(){
    return (
        <div>
            {gerarLista()}
        </div>
    )
}