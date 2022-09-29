import React from "react";

const Profile = () => {
  return (
    <div>
      <div class="card mb-3 mt-5 border-0">
        <div className="row">
          <div className="col-3">
            <img
              className="card-img-top rounded"
              src="https://media-exp1.licdn.com/dms/image/C5103AQHLHEdJ8Ce8Fg/profile-displayphoto-shrink_800_800/0/1553078468240?e=1669852800&v=beta&t=EA5dddLCYj5vDkzKQPqh3pAVS628q3GIQI64W4nfE8c"
              alt="profile-logo"
            />
          </div>
          <div className="col-9">
            <h5 class="card-title">MD. Raisul Islam Rimon</h5>
            <p class="card-text">Dhaka, Bangladesh</p>
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
          <button className="btn btn-outline-success text-dark me-2">
            10s
          </button>
          <button className="btn btn-outline-success text-dark me-2">
            20s
          </button>
          <button className="btn btn-outline-success text-dark me-2">
            30s
          </button>
          <button className="btn btn-outline-success text-dark me-2">
            40s
          </button>
          <button className="btn btn-outline-success text-dark me-2">
            50s
          </button>
        </div>
      </div>
      {/* Exercise Details  */}
      <div className="mt-5">
        <h5>Exercise Details</h5>

        <div className="row mx-2 mt-4">
          <div className="col-6">
            <h6 className="fw-bold">Exercise Time : </h6>
          </div>
          <div className="col-6">
            <p>0 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
