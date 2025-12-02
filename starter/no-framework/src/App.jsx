import { Suspense } from "react";

export default function App() {
  console.log("Rendering App Server component")
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Notes App</h1>
    </Suspense>
  );
}