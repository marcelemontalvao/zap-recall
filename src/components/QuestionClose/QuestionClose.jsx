import play from "../../assets/img/seta_play.png"
import right from "../../assets/img/icone_certo.png"
import error from "../../assets/img/icone_erro.png"
import almost from "../../assets/img/icone_quase.png"
import {ClosedQuestion} from "./questionCloseStyles.js"

const QuestionClose = ({index, setQuestionOpenClass, backgroundColor, colorQuestionFinish, setColorQuestionFinish, textDecoration, setTextDecoration}) => {

    const renderImg = (backgroundColor) => {
        switch(backgroundColor) {
            case "bgVermelho":
                setColorQuestionFinish("#FF3030")
                setTextDecoration("line-through")
                return error;
            case "bgAmarelo":
                setColorQuestionFinish("#FF922E")
                setTextDecoration("line-through")
                return almost;
            case "bgVerde" :
                setColorQuestionFinish("#2FBE34")
                setTextDecoration("line-through")
                return right;
            default: 
                return play;
        }
    }


    const handleQuestion = (backgroundColor) => {
        if(backgroundColor === "") {
            setQuestionOpenClass(true) 
        }
    }

    return (
        <ClosedQuestion colorQuestionFinish={colorQuestionFinish} textDecoration={textDecoration}>
            <p data-test="flashcard-text">Pergunta {index + 1}</p>
            <img src={renderImg(backgroundColor)} data-test="play-btn" alt="Seta virar card" onClick={() => handleQuestion(backgroundColor)} />
        </ClosedQuestion>
    );
}

export default QuestionClose;