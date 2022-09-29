import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Profile = (props) => {
  const { addToList } = props;
  const [addBreak, setAddBreak] = useState(0);

  let total = 0;

  for (const exercise of addToList) {
    total = total + parseInt(exercise.time);
  }
  const handleAddBreak = (e) => {
    const breakValue = e.target.innerText;
    const addBreakInt = breakValue.slice(0, 2);
    setAddBreak(addBreakInt);
  };
  const activityComplete = () => {
    toast("Activity Completed");
  };
  return (
    <div className="sticky-top">
      <div className="card mb-3 mt-5 border-0 ">
        <div className="row">
          <div className="col-3">
            <img
              className="card-img-top rounded"
              src="https://media-exp1.licdn.com/dms/image/C5103AQHLHEdJ8Ce8Fg/profile-displayphoto-shrink_800_800/0/1553078468240?e=1669852800&v=beta&t=EA5dddLCYj5vDkzKQPqh3pAVS628q3GIQI64W4nfE8c"
              alt="profile-logo"
            />
          </div>
          <div className="col-9">
            <h5 className="card-title">MD. Raisul Islam Rimon</h5>
            <p className="card-text">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div>
        <h5 className="fw-semibold">About me : </h5>
        <h6>◙ I am studying BSc in CSE</h6>
        <h6>◙ I am a student of Programming-Hero</h6>
      </div>
      {/* add a break section  */}
      <div className="mt-5">
        <h5>Add A Break</h5>
        <div>
          <button
            onClick={handleAddBreak}
            className="btn btn-outline-success text-dark me-2"
          >
            <span>10s</span>
          </button>
          <button
            onClick={handleAddBreak}
            className="btn btn-outline-success text-dark me-2"
          >
            <span className="breakTime">20s</span>
          </button>
          <button
            onClick={handleAddBreak}
            className="btn btn-outline-success text-dark me-2"
          >
            <span className="breakTime">30s</span>
          </button>
          <button
            onClick={handleAddBreak}
            className="btn btn-outline-success text-dark me-2"
          >
            <span className="breakTime">40s</span>
          </button>
          <button
            onClick={handleAddBreak}
            className="btn btn-outline-success text-dark me-2"
          >
            <span className="breakTime">50s</span>
          </button>
        </div>
      </div>
      {/* Exercise Details  */}
      <div className="mt-5">
        <h5>Exercise Details</h5>

        <div className="row mx-2 mt-4">
          <div className="col-6">
            <h6 className="fw-bold">Exercise Time </h6>
          </div>
          <div className="col-6">
            <p className="text-muted">{total} seconds</p>
          </div>
        </div>

        {/* break time  */}
        <div className="row mx-2 mt-2">
          <div className="col-6">
            <h6 className="fw-bold">Break Time </h6>
          </div>
          <div className="col-6">
            <p className="text-muted">{addBreak} seconds</p>
          </div>
        </div>
      </div>
      <button
        onClick={activityComplete}
        className="btn btn-primary btn-lg w-100 mt-4"
      >
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Profile;
