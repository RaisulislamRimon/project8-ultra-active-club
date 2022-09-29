import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("exercises.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div className="container-fluid">
      <h3>Select today's exercise</h3>
      {exercises.map((exercise) => (
        <Exercise exercise={exercise}></Exercise>
      ))}
    </div>
  );
};

export default Exercises;
