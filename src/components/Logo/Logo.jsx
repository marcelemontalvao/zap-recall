import logo from "../../assets/img/logo.png"
import "./LogoStyles.css"

const Logo = () => {
    return (
      <div className="logo-container">
        <img src={logo} alt="" />
        <h1>ZapRecall</h1> 
      </div>
    );
}

export default Logo;