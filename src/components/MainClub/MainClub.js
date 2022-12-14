import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import Profile from "../Profile/Profile";

const MainClub = () => {
  const [exercises, setExercises] = useState([]);
  const [addToList, setAddToList] = useState([]);
  useEffect(() => {
    fetch("exercises.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToList = (exercise) => {
    const newAddToList = [...addToList, exercise];
    setAddToList(newAddToList);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <Exercises exercises={exercises} handleAddToList={handleAddToList} />
        </div>
        <div className="col-md-12 col-lg-4">
          <Profile exercises={exercises} addToList={addToList} />
        </div>
      </div>
    </div>
  );
};

export default MainClub;
