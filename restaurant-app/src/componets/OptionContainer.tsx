export default function OptionContainer() {

  const handleChangeOptions = ()=> {}
  
  return(
    <div className='CONTAINER_OPTION_BUTTONS'>
      <button onClick={handleChangeOptions} className='BUTTON BUTTON_1'><a href={`/Food`}>Take An Order</a></button>
      <button onClick={handleChangeOptions} className='BUTTON BUTTON_2'>To Carry Out</button>
      <button onClick={handleChangeOptions} className='BUTTON BUTTON_3'>Home Orders</button>
    </div>
  );
}
