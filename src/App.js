import './App.css';
import Header from './Components/header/header';
import Main from './Components/main/main';
import Menu from './Components/menu/menu';
import DieuHuong from './Components/router/dieuhuong';

function App() {
  return (
    <>
  <div className="container-scroller">
     
     
     <Header/>
    <div className="container-fluid page-body-wrapper">
      <Menu/>
      <DieuHuong/>
    </div>
  </div>
    </>
  );
}

export default App;
