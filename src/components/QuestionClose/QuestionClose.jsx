import play from "../../assets/img/seta_play.png"
import right from "../../assets/img/icone_certo.png"
import error from "../../assets/img/icone_erro.png"
import almost from "../../assets/img/icone_quase.png"
import "./questionCloseStyles.css"

const QuestionClose = ({index, setQuestionOpenClass, backgroundColor, colorQuestionFinish, setColorQuestionFinish}) => {

    const renderImg = (backgroundColor) => {
        switch(backgroundColor) {
            case "bgVermelho":
                setColorQuestionFinish("cRed")
                return error;
            case "bgAmarelo":
                setColorQuestionFinish("cYellow")
                return almost;
            case "bgVerde" :
                setColorQuestionFinish("cGreen")
                return right;
            default: 
                return play;
        }
    }

    return (
        <div className={colorQuestionFinish}>
            <p>Pergunta {index + 1}</p>
            <img src={renderImg(backgroundColor)} alt="Seta virar card" onClick={() => setQuestionOpenClass(true)} />
        </div>
    );
}

export default QuestionClose;