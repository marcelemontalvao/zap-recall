import Question from "../Question/Question";
import cards from "../../cards.js"

const Questions = ({ count, setCount}) => {
    return (
        <>
            {cards.map((card, index) => <Question  count={count} setCount={setCount} index={index} question={card.question} answer={card.answer} key={index} />)}
        </>
    );
}

export default Questions;