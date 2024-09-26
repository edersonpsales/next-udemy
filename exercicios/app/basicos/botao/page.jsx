"use client";

function acao1() {
  console.log("acao 1");
}

export default function botao() {
  function acao2() {
    console.log("acao 2");
  }

  function acao4(e) {
    console.log(e);
  }

  return (
    <div>
      <input type="text" onChange={e => console.log(e.target.value)}/>
      <button onClick={acao1}>Click 1</button>
      <button onClick={acao2}>Click 2</button>
      <button
        onClick={() => {
          console.log("acao 3");
        }}
      >
        Click 3
      </button>
      <button onClick={acao4}>Click 4</button>
      <button onClick={(e) => acao4(e.altKey)}>Click 5</button>
    </div>
  );
}
