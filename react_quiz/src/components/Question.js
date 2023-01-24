import { useState } from "react";

var count = 0;
var x = 0;
const Question = (props) => {
  const [y, sety] = useState(1);

  const [score, setScore] = useState(0);
  const selectOption = (option) => {
    x = x + 1;
    sety(0);
    if (props.answer === option) {
      count = count + 1;
      //console.log(score);
      setScore(score + 1);
      //console.log(score);
    }
  };
  console.log(score);

  return (
    <>
      <div className="box_qn">
        <h4>{props.qn}</h4>
        <div className="answers">
          {y ? (
            <button
              className="box_option"
              onClick={() => {
                selectOption("opta");
              }}
            >
              {props.opt1}
            </button>
          ) : (
            <button className="box_optionae box_option">{props.opt1}</button>
          )}
          {y ? (
            <button
              className="box_option"
              onClick={() => {
                selectOption("optb");
              }}
            >
              {props.opt2}
            </button>
          ) : (
            <button className="box_optionae box_option">{props.opt2}</button>
          )}
          {y ? (
            <button
              className="box_option"
              onClick={() => {
                selectOption("optc");
              }}
            >
              {props.opt3}
            </button>
          ) : (
            <button className="box_optionae box_option">{props.opt3}</button>
          )}

          {y ? (
            <button
              className="box_option"
              onClick={() => {
                selectOption("optd");
              }}
            >
              {props.opt4}
            </button>
          ) : (
            <button className="box_optionae box_option">{props.opt4}</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
export { count, x };
