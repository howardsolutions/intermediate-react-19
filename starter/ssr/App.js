import { createElement, useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return createElement(
    "div",
    null,
    createElement("h1", null, "Hello From React SSR"),
    createElement("p", null, "this is ssr paragraph"),
    createElement(
      "button",
      { onclick: () => setCount((prevCount) => prevCount + 1) },
      `Count ${count}`
    )
  );
}

export default App;
