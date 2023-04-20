import React from "react";
// styles
import s from "./learning.module.scss";
// utils
import { sayHello, sayInputText } from "../../utils/alerts";
// modules
import { Calculator } from "../../modules/Calculator";

const learning = () => {
  const flag = false;
  const calc = new Calculator();
  // array fruits
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>{calc.sum(1, 2)}</div>
            {flag ? (
              <>
                <div onClick={sayHello} className="btn btn-primary">
                  Say Hello World!
                </div>
                <h1>test</h1>
              </>
            ) : (
              <>
                <h1 className={s.title}>Learning JSX</h1>
                {fruits.map((fruit, index) => {
                  return (
                    <div key={index}>
                      <p>{fruit}</p>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <input
            onBlur={(e) => {
              sayInputText(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default learning;
