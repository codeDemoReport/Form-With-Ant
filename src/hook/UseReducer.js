import React, { useReducer, useRef, useState } from "react";

//initstate
const initState = {
  work: "",
  works: ["Quet nha"],
};

//actions
const ADD_ACTION = "ADD";
const REMOVE_ACTION = "REMOVE";
const CHANGE_ACTION = "CHANGE";

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_ACTION:
      return { ...state, work: action.payload };
    case ADD_ACTION:
      return { ...state, works: [...state.works, action.payload] };
    case REMOVE_ACTION:
      return {
        ...state,
        works: state.works.filter((element, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

//action
const handleSubmit = (payload) => {
  return {
    type: ADD_ACTION,
    payload: payload,
  };
};

const handleChange = (payload) => {
  return { type: CHANGE_ACTION, payload: payload };
};

const handleRemove = (payload) => {
  return { type: REMOVE_ACTION, payload: payload };
};

function UseReducer(props) {
  //useReducer nhận 3 tham số (reducer, inistate, ...)
  const [data, dispatch] = useReducer(reducer, initState);
  const input = useRef();

  const { work, works } = data;

  const submit = () => {
    dispatch(handleSubmit(work));
    dispatch(handleChange(""));
    input.current.focus();
  };

  const changeInput = (e) => {
    dispatch(handleChange(e.target.value));
  };

  const removeWork = (index) => {
    dispatch(handleRemove(index));
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <h1>To do</h1>
      <input ref={input} value={work} onChange={(e) => changeInput(e)} />
      <button style={{ margin: "5px" }} onClick={submit}>
        Add
      </button>
      <ul>
        {works.map((element, index) => (
          <li key={index}>
            <span>
              <h2>
                {element} <span onClick={() => removeWork(index)}>&times;</span>
              </h2>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducer;
