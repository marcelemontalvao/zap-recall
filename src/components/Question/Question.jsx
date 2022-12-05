import QuestionClose from "../QuestionClose/QuestionClose";
import QuestionOpen from "../QuestionOpen/QuestionOpen";
import { useState } from "react";

const Question = ({index, question, answer, count, setCount}) => {
    const [questionOpenClass, setQuestionOpenClass] = useState(false)
    const [colorQuestionFinish, setColorQuestionFinish] = useState("#333333")
    const [textDecoration, setTextDecoration] = useState("none")
    const [backgroundColor, setBackgroundColor] = useState("")
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#FF3030")


    return (
        <>
            {questionOpenClass 
                ? 
                    <QuestionOpen question={question} answer={answer} questionOpenClass={questionOpenClass} setQuestionOpenClass={setQuestionOpenClass} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} count={count} setCount={setCount} buttonBackgroundColor={buttonBackgroundColor} setButtonBackgroundColor={setButtonBackgroundColor} /> 
                : 
                    <QuestionClose index={index} setQuestionOpenClass={setQuestionOpenClass} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} colorQuestionFinish={colorQuestionFinish} setColorQuestionFinish={setColorQuestionFinish} textDecoration={textDecoration} setTextDecoration={setTextDecoration} /> 
            }
        </>
    );
}

export default Question;