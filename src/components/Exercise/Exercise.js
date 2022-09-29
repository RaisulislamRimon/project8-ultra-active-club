import React from "react";

const Exercise = (props) => {
  // console.log(props.exercise);
  const { exercise, handleAddToList } = props;
  const { name, details, img, time } = exercise;
  return (
    <div>
      <div className="col">
        <div className="card  h-100">
          <div className="col-sm-12">
            <img
              src={img}
              className="card-img-top"
              alt="..."
              width="50"
              height="170"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{details}</p>
            <p className="card-text">
              <span className="fw-semibold">Time required: {time}seconds</span>
            </p>
          </div>
          <button
            onClick={() => handleAddToList(exercise)}
            className="btn btn-primary mx-0 mt-3"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
