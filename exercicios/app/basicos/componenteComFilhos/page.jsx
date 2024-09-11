import Lista from '../../../components/Lista';
import Item from '../../../components/Item';

export default function componenteComFilhos(){
    return (
        <div>
            <Lista>
                <Item conteudo="teste"></Item>
                <Item conteudo="abc"></Item>
                <Item conteudo="qwe"></Item>
                <Item conteudo="123"></Item>
                <Item conteudo="xpto"></Item>
            </Lista>
        </div>
    )
}