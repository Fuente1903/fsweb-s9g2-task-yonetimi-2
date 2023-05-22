import React from "react";
import { differenceInDays } from 'date-fns';


const Task = ({ taskObj, onComplete }) => {
  const daysRemaining = differenceInDays(new Date(taskObj.deadline), new Date());
  const deadlineClass = daysRemaining <= 3 ? 'bg-custom-red' : 'bg-gray-200';

  return (
    <div className={`task ${deadlineClass}`}>
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{taskObj.deadline}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
