import { useState } from 'react';

const Clicker = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p># of clicks: {count}</p>
    </>
  )
}

export default Clicker;
