// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todoitem} from './MyComponents/Todoitem'
import {Footer} from './MyComponents/Footer'

function App() {
  return (
    <>
    <Header title={45} searchBar={true} />
    <Todoitem/>
    <Footer/>
    </>
  );
}

export default App;
