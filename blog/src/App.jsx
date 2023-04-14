import { useState } from "react";

import "./App.css";

function App() {
  const [post, setPost] = useState();

  return (
    <>
      <div className="back">
        <header className="header">
          <h1>Blog</h1>
        </header>
        <section className="postSend">
          <form action="">
            <input type="text" name="post" id="post" />
            <button>Enviar</button>
          </form>
        </section>
        <section className="postHere">
          <h2>Aqui vai ficar</h2>
        </section>
      </div>
    </>
  );
}

export default App;
