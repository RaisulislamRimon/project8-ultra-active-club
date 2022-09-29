import React from "react";
import Exercise from "../Exercise/Exercise";

const Exercises = (props) => {
  const { exercises, handleAddToList } = props;
  return (
    <div className="container-fluid">
      <h3 className="mb-5">Simple exercises to keep your body fit</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            handleAddToList={handleAddToList}
          ></Exercise>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
