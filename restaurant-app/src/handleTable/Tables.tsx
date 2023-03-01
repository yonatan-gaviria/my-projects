import { useState } from 'react';
import './TablesStylesheet.css';

export function Tables() {

  const [example, setExample] = useState("");

  const handleClick = ()=> {console.log("hola mundo")}

  return(
    <div className="TablesContainer">
      <nav className="TablesMenu">menu</nav>
      <div className="Tables">
        <button className="Table" onClick={ handleClick }>Table 1</button>
        <button className="Table">Table 2</button>
        <button className="Table">Table 3</button>
        <button className="Table">Table 4</button>
        <button className="Table">Table 5</button>
        <button className="Table">Table 6</button>
        <button className="Table">Table 7</button>
        <button className="Table">Table 8</button>
        <button className="Table">Table 9</button>
        <button className="Table">Table 10</button>
        <button className="Table">Table 11</button>
        <button className="Table">Table 12</button>
      </div>
      {example}
    </div>
  );
}