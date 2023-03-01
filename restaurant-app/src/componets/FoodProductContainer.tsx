import { useState } from "react";
import FoodProduct from "./FoodProduct";

function FoodProductContainer() {

  const [FoodProductList, setFoodProductList] = useState([]);

  return ( 
    <section className='proyectos-recientes d-flex flex-column'>

        <div className='container text-center proyectos-contenedor'>
          <div className='row'>
            <div className='PRINCIPAL_CONTAINER'>
              <FoodProduct/>
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default FoodProductContainer;