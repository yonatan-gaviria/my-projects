export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        
        <nav>
          <ul>
            <li>
              <a href={`/App`}>App</a>
            </li>
            <li>
              <a href={`/Food`}>Food</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}