import style from '../components/Subdivisao.module.css'
export default function Subdivisao(props) {
  return (
  <div className={style.subdivisao} style={{backgroundColor: props.preta ? "#000":"#fff"}}></div>
    );
}
