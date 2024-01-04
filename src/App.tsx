/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hunts')
      .then((response) => response.json())
      .then((data) => dataSet(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  return (
    <div className="">
      <h1>Hunts</h1>
      <ul>
        {data.map((hunt: any) => (
          <li key={hunt.id}>{hunt.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
