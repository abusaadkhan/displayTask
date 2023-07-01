import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className=' m-0 p-0  ' >
      <Navbar/>
      <Outlet/>
      <Footer/>
    
    </div>
  );
}

export default App;
