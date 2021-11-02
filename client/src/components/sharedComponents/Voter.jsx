import React from 'react';


const Voter = (props) => {
  //requires a props.question which is a string EX: Was this review helpful?

  //requires a props.yes that fires on click events of Yes
  //requires a props.report that fires on click events of report

  // requires props.helpfulness an integer that displays the count of users that clicked yes

  return (
    <div className = {'helpful-vote'}>
          {props.question}
          <div
          className = {'helpful-vote-option'}
          onClick = {props.yes}
          >Yes </div>
          {props.helpfulness} users found this helpful.
          <div
        className = 'helpful-vote-option'
        onClick = {props.report}
        >Report</div>
        </div>

  );
};

export default Voter;