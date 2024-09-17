import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Familia {props.familia}</h1>
      <Filho {...props} nome="Elias" />
      <Filho  {...props} nome="Elton"/>
      <Filho  {...props} nome="Elisson"/>
      <Filho nome="Ederson" {...props}  />
      <Filho {...props} nome="Ederson" />
    </div>
  );
}
