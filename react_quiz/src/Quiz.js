import { useState } from "react";
import { Link } from "react-router-dom";
import Question, { x } from "./components/Question";
import questionbank from "./components/questionbank";

function createQn(quest) {
  return (
    <Question
      key={quest.key}
      qn={quest.Qn}
      opt1={quest.options[0]}
      opt2={quest.options[1]}
      opt3={quest.options[2]}
      opt4={quest.options[3]}
      answer={quest.ans}
    />
  );
}
const Quiz = (qbanks) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  function func() {
    setQuestionIndex(x);
  }
  return (
    <>
      <div>
        <dl onClick={func}>{questionbank.map(createQn)}</dl>
      </div>
      <div>
        {questionIndex >= 5 && (
          <Link to="/Result">
            <button id="show"><b>Show Results</b></button>
          </Link>
        )}
      </div>
    </>
  );
};

// function Quiz(){
// const [questionIndex, setQuestionIndex] = useState(1);
// const presentQuestion = questionbank[questionIndex];
// return <div>
//  <div className="quiz_box">
//      <div className="quiz_question">

//   {presentQuestion.Qn}
//      </div>
//      <div className="quiz_question_options">
//       <ul className='quiz_ul'>
//         <li className='quiz_list'>{presentQuestion.options[0]}</li>
//         <li className='quiz_list'>{presentQuestion.options[1]}</li>
//         <li className='quiz_list'>{presentQuestion.options[2]}</li>
//         <li className='quiz_list'>{presentQuestion.options[3]}</li>
//       </ul>
//      </div>

//     </div>
// </div>

// }

export default Quiz;
