import logo from "../../assets/img/image-1.png"
import { InitialPageContainer } from "./InitialPageStyles";

const InitialPage = ({setInitialPage}) => {
    return (
      <InitialPageContainer>
        <div>
            <img src={logo} alt="" />
            <h1>ZapRecall</h1> 
        </div>
        <button data-test="start-btn" onClick={() => setInitialPage(false)}>Iniciar Recall!</button>
      </InitialPageContainer>
    );
}

export default InitialPage;