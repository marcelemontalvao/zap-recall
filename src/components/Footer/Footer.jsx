import cards from "../../cards.js"
import "./footerStyles.css"

const Footer = ({count, setCount}) => {
    return (
      <div className="footer-concluidos">
        <span>{count}/{cards.length} CONCLUÍDOS</span> 
      </div>
    );
}

export default Footer;