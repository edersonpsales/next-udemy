export default function Botao1(props){
    const estilo={
        fontsize:"15px",
        fontfamily:"Arial",
        width:"140px",
        height:"50px",
        borderwidth:"1px",
        color:"#fff",
        bordercolor:"#18ab29",
        fontweight:"bold",
        bordertopleftradius:"28px",
        bordertoprightradius:"28px",
        borderbottomleftradius:"28px",
        borderbottomrightradius:"28px",
        textshadow: "1px 1px 0px #2f6627",
        background:"#44c767"
    }
    return (
        <button style={estilo} onClick={props.funcao}>{props.label}</button>
    )
}