import { useState } from "react";
import turn from "../../assets/img/seta_virar.png"
import Button from "../Button/Button";
import "./questionOpenStyles.js"
import { OpenQuestion, DivButtons } from "./questionOpenStyles.js";

const QuestionOpen = ({question, answer, questionOpenClass ,setQuestionOpenClass, setBackgroundColor, count, setCount, buttonBackgroundColor, setButtonBackgroundColor}) => {
    const [showButtons, setShowButtons] = useState(false)
    return (
        <>
            {showButtons 
                ?
                    <OpenQuestion>
                        <p data-test="flashcard-text">{answer}</p>
                        <DivButtons>
                            <Button data-test="no-btn" backgroundColor={"bgVermelho"} buttonBackgroundColor={buttonBackgroundColor} setBackgroundColor={setBackgroundColor} textButton={"Não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            
                            <Button data-test="partial-btn" backgroundColor="bgAmarelo" buttonBackgroundColor={"#FF922E"} setBackgroundColor={setBackgroundColor}  textButton={"Quase não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            
                            <Button data-test="zap-btn" backgroundColor="bgVerde" buttonBackgroundColor={"#2FBE34"} setBackgroundColor={setBackgroundColor}  textButton={"Zap!"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                        </DivButtons>
                    </OpenQuestion>

                :    
                    <OpenQuestion>
                        <p data-test="flashcard-text">{question}</p>
                        <img src={turn} alt="Seta virar card" data-test="turn-btn" onClick={()=> setShowButtons(true)}/>
                    </OpenQuestion>
            }
        </>
      
    );
}

export default QuestionOpen;