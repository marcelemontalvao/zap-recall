import "./buttonStyles.css"

const Button = ({backgroundColor, setBackgroundColor, textButton, questionOpenClass, setQuestionOpenClass, count, setCount}) => {
  console.log(questionOpenClass)  
  return (
      <button className={backgroundColor} onClick={()=> {
        setQuestionOpenClass(false)
        setBackgroundColor(backgroundColor)
        setCount(count + 1)
      }}>
        <p>{textButton}</p>
      </button>
    );
}

export default Button;