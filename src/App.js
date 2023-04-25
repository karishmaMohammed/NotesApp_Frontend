import AllRoutes from "./routes/AllRoutes";
import { Navbar } from "./components/Homepage/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
