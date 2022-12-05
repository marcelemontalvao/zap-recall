import cards from "../../cards.js"
import {FooterStyles} from "./footerStyles.js"

const Footer = ({count}) => {
    return (
      <FooterStyles  data-test="footer">
        <span>{count}/{cards.length} CONCLUÍDOS</span> 
      </FooterStyles>
    );
}

export default Footer;