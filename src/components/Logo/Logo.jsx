import logo from "../../assets/img/logo.png"
import {LogoContainer} from "./LogoStyles.js"

const Logo = () => {
    return (
      <LogoContainer>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1> 
      </LogoContainer>
    );
}

export default Logo;