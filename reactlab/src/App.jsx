import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`Count has been incremented! Count: ${count}`);
  }, [count]);

  return (
    <>
      <div>
        <div className="card">
          <button onMouseEnter={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
