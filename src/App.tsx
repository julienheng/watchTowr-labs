import './App.css';

// COMPONENTS
import Dashboard from '@/features/Dashboard/Dashboard';

function App() {
  // const [data, dataSet] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/hunts')
  //     .then((response) => response.json())
  //     .then((data) => dataSet(data))
  //     .catch((error) => console.error(error));
  // }, []);


  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
