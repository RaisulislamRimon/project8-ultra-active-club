import React from "react";

const Exercise = (props) => {
  // console.log(props.exercise);
  const { exercise } = props;
  const { name, details, img } = exercise;
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
          </div>
          <button className="btn btn-primary mx-0">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
