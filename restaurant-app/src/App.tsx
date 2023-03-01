import './stylesheets/stylesheet.css';
import FoodProductContainer from './componets/FoodProductContainer';
import OptionContainer from './componets/OptionContainer';
import { useState } from 'react';

function App() {

  const [toShow, setToShow] = useState(
    <FoodProductContainer/>
  );

  const handleChangeViewport = (num = 0)=> {
    switch (num) {
      case 0:
        setToShow(<div>
          pagina principal
          <button onClick={ ()=> handleChangeViewport(1) }>para pagina 1</button>
          <button onClick={ ()=> handleChangeViewport(2) }>para pagina 2</button>
        </div>);
        break;

      case 1:
        setToShow(
          <div>
            hola yonatan estas en la pag {num}
            <button onClick={ ()=> handleChangeViewport(0) }>back</button>
          </div>
        );
        break;

      case 2:
        setToShow(
          <FoodProductContainer />
        );
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      <div className='PRINCIPAL_CONTAINER'>
        {toShow}
      </div>
    </>
  );
}

export default App;
