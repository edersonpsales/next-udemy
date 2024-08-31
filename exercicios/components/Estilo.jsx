export default function Estilo(props) {
  const classeAplicada = props.numero > 0 ? "azul" : "vermelho";
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero > 0 ? "#2D2" : "#D22",
          color: props.cor,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Estilo
      </h1>
      <h2 className={classeAplicada}>
        Substitulo
      </h2>
    </div>
  );
}
