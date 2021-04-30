import ReactDOM from "react-dom";
import Navbar from './components/Navbar/Navbar';
import Corpo from './components/Corpo/Corpo';
import FundoMobile from './components/FundoMobile/FundoMobile'

function App(){
    return(
    <>
        <Navbar />
        
        <Corpo />

        <FundoMobile />
    </>
    );
}

ReactDOM.render(<App /> , document.querySelector(".root"));
