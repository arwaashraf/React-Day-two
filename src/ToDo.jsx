import React, { useState } from "react";

function ToDo() {
  const [todos, setToDos] = useState([]);
  const addToDo = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);
    setToDos([e.target[0].value, ...todos]); //34an yb2a m3aia el todos el 2dema
    e.target[0].value = "";
  };
  const deleteToDo = (todo) => {
    console.log(todo);
    const result = todos.filter((t) => {
      return t !== todo;
    });
    console.log(result);
    setToDos(result);
  };
  const markDone = (e) => {
    e.target.style.textDecoration = "line-through";
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          addToDo(e);
        }}
      >
        <div className="container my-5">
          <div className="form-group">
            <h2
              className="text-light text-center"
              style={{ fontSize: 44, fontStyle: "italic" }}
            >
              To-Do App!
            </h2>

            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Enter New task"
              />
              <label >Add New Todo</label>
            </div>
            <button type="submit" className="btn btn-primary ">
              Add Todo List
            </button>
          </div>
        </div>
      </form>
      <ul className="text-center">
        {todos.map((todo) => {
          return (
            <>
              <li
                style={{ listStyleType: "none" }}
                onClick={(e) => {
                  markDone(e);
                }}
              >
                {todo}
              </li>
              <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={() => {
                  deleteToDo(todo);
                }}
              >
                Delete Todo
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ToDo;
