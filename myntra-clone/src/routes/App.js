import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItems from '../components/FetchItems';


function App() {


  return (
  <>
  <Header></Header> 
  <FetchItems/>
  <Outlet></Outlet> 
    <Footer></Footer>
  </>
  );
}

export default App;
