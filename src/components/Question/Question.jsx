import QuestionClose from "../QuestionClose/QuestionClose";
import QuestionOpen from "../QuestionOpen/QuestionOpen";
import { useState } from "react";

const Question = ({index, question, answer, count, setCount}) => {
    const [questionOpenClass, setQuestionOpenClass] = useState(false)
    const [colorQuestionFinish, setColorQuestionFinish] = useState("perguntaFechada")
    const [backgroundColor, setBackgroundColor] = useState("")

    return (
        <>
            {questionOpenClass 
                ? 
                    <QuestionOpen question={question} answer={answer} questionOpenClass={questionOpenClass} setQuestionOpenClass={setQuestionOpenClass} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} count={count} setCount={setCount} /> 
                : 
                    <QuestionClose index={index} setQuestionOpenClass={setQuestionOpenClass} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} colorQuestionFinish={colorQuestionFinish} setColorQuestionFinish={setColorQuestionFinish} /> 
            }
        </>
    );
}

export default Question;