import { useState } from "react";
import turn from "../../assets/img/seta_virar.png"
import Button from "../Button/Button";
import "./questionOpenStyles.css"

const QuestionOpen = ({question, answer, questionOpenClass ,setQuestionOpenClass, backgroundColor, setBackgroundColor, count, setCount}) => {
    const [showButtons, setShowButtons] = useState(false)
    return (
        <>
            {showButtons 
                ?
                    <div className="pergunta-aberta">
                        <p>{answer}</p>
                        <div className="btns">
                            <Button backgroundColor={"bgVermelho"} setBackgroundColor={setBackgroundColor} textButton={"Não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            <Button backgroundColor="bgAmarelo" setBackgroundColor={setBackgroundColor}  textButton={"Quase não lembrei"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                            <Button backgroundColor="bgVerde" setBackgroundColor={setBackgroundColor}  textButton={"Zap!"} setQuestionOpenClass={setQuestionOpenClass} questionOpenClass={questionOpenClass} count={count} setCount={setCount} />
                        </div>
                    </div>

                :    
                    <div className="pergunta-aberta">
                        <p>{question}</p>
                        <img src={turn} alt="Seta virar card" onClick={()=> setShowButtons(true)}/>
                    </div>
            }
        </>
      
    );
}

export default QuestionOpen;