import {ButtonStyle} from "./buttonStyles.js"

const Button = ({backgroundColor, setBackgroundColor, textButton, buttonBackgroundColor, setQuestionOpenClass, count, setCount}) => {
  return (
      <ButtonStyle backgroundColor={backgroundColor} buttonBackgroundColor={buttonBackgroundColor} onClick={()=> {
        setQuestionOpenClass(false)
        setBackgroundColor(backgroundColor)
        setCount(count + 1)
      }}>
        <p>{textButton}</p>
      </ButtonStyle>
    );
}

export default Button;