// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from "react";
import Cabecera from "./Components/Cabecera";
import Listado from "./Components/Listado";

function App() {
  const [totalBuy, setTotalBuy] = useState(0);

  return (
    <div className="App">
      <Cabecera totalBuy={totalBuy}/>
      <Listado totalBuy={totalBuy} setTotalBuy={setTotalBuy}/>
    </div>
  );
}

export default App;