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
    </div>
  );
};

export default Profile;