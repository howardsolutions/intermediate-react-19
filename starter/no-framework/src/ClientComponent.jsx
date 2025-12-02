"use client";

function ClientComponent() {
  console.log("Rendering ClientComponent");
  const [count, ssetCount] = useState(0);
  return (
    <fieldset>
      <legend>ClientComponent</legend>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </fieldset>
  );
}

export default ClientComponent;
