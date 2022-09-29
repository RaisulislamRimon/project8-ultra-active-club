import React from "react";

const Questions = () => {
  return (
    <div className="mt-5 text-center container py-5">
      <h2 className="mb-5">Questions</h2>
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How does React js works ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                React is a very popular JavaScript library. Changing something
                in virtual dom vs changing something in the real dom doesn't
                make much difference. The real difference is after that. When we
                are changing the real DOM in the browser, it will trigger layout
                and repaint, which takes extra resources and is very expensive.
                This means that we have to avoid touching the DOM, as much as we
                can and should only change something there, when absolutely sure
                it's the minimal course of actions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is the difference between props and state in react?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Props are used to pass data from one component to another. The
                state is a local data storage that is local to the component
                only and cannot be passed to other components. props (short for
                “properties”) and state are both plain JavaScript objects. props
                get passed to the component (similar to function parameters)
                whereas state is managed within the component (similar to
                variables declared within a function).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Why is useEffect used?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The useEffect Hook allows you to perform side effects in your
                components. Some examples of side effects are: fetching data,
                directly updating the DOM, and timers. useEffect accepts two
                arguments. The second argument is optional.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
