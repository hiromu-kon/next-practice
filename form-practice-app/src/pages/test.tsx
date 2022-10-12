import { useCounter } from "../hooks/useCounter";

const Test = () => {
  const { count, setCount } = useCounter();

  const onClick = () => {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>TestPage</h1>
      <p>{count}</p>
      <button onClick={onClick}>Increment Count</button>
    </div>
  );
}

export default Test;
