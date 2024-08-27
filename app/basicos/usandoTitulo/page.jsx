import TituloABC from '../../../components/Titulo'

export default function usandoTitulo(){
    return (
        <div>
           <TituloABC principal="ABCDE" secundario="123456"/>
           <TituloABC principal="XPTO" secundario="FruFru" pequeno={true}/>
        </div>
    )
}