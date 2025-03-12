import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increase = () => setCount(count + step);

  const decrease = () => setCount(count - step > 0 ? count - step : 0);

  const reset = () => { setCount(0); setStep(1);}

  return (
    // <>
    //   <div>
    //   </div>
    //   <div className="card">
    //     <button onClick={() => setStep((step) => step + 1)}>
    //       +1
    //     </button>
    //     step:{step}
    //     <button onClick={() => setStep((step) => step - 1 > 0 ? step - 1 : 0)}>
    //       -1
    //     </button><br />
    //     <button onClick={() => increase()}>
    //       Increase {step}
    //     </button>
    //     Count:{count}
    //     <button onClick={() => decrease()}>
    //       Decrease {step}
    //     </button><br />
    //     <button onClick={() => reset()}>
    //       Reset Count
    //     </button>

    //   </div>

    // </>
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>Counter Value: {count}</h2>

      <div>
        <label >Step Value:</label>
        <input type='number' value={step} onChange={(e) => setStep(Number(e.target.value))} style={styles.input} />
      </div>
      <div>
        <button onClick={increase} style={styles.button}>
          Increase
        </button>
        <button onClick={decrease} style={styles.button}>
          Decrease
        </button>
        <button onClick={reset} style={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  )
}
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial,sans-serif',
    marginTop: '50px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  resetButton: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
  }
}
export default App
