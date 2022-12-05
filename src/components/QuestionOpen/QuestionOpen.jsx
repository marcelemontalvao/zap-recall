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
                        <p>{answer}</p>
                        <DivButtons>
                            <Button backgroundColor={"bgVermelho"} buttonBackgroundColor={buttonBackgroundColor} setBackgroundColor={setBackgroundColor} textButton={"Não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            
                            <Button backgroundColor="bgAmarelo" buttonBackgroundColor={"#FF922E"} setBackgroundColor={setBackgroundColor}  textButton={"Quase não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            
                            <Button backgroundColor="bgVerde" buttonBackgroundColor={"#2FBE34"} setBackgroundColor={setBackgroundColor}  textButton={"Zap!"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                        </DivButtons>
                    </OpenQuestion>

                :    
                    <OpenQuestion>
                        <p>{question}</p>
                        <img src={turn} alt="Seta virar card" onClick={()=> setShowButtons(true)}/>
                    </OpenQuestion>
            }
        </>
      
    );
}

export default QuestionOpen;