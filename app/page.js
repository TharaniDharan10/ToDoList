"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (element) => {
    element.preventDefault();
    //This method doesnot come in suggestion so type carefully.
    // We add this method bcoz by default on submit the page reload,to prevent that we add it
    setmainTask([...mainTask, { title, description }]);
    //...mainTask ensures that previous main tasks dont get removed when we add a task
    settitle("");
    setdescription("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = (
    <h2 className="font-bold text-red-700">No Task Available</h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            {/* w-2/3 gives a width btn title and description */}
            <h5 className="text-2xl font-semibold">{task.title}</h5>
            <h6 className="text-xl font-semibold">{task.description}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="p-3 font-semibold bg-red-800 text-white rounded"
          >
            DELETE
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-2xl p-5 mx-10 font-bold text-center rounded m-2">
        My ToDoList
      </h1>
      <form
        onSubmit={submitHandler}
        className=" mx-10  mb-2 bg-yellow-600 flex justify-evenly"
      >
        <input
          type="text"
          className="px-4 py-3 mx-10 my-4 border-zinc-800 text-2xl border-4"
          placeholder="Enter Title Here"
          value={title}
          onChange={(element) => {
            settitle(element.target.value); //two way binding(binding variable with the input box)
          }}
        ></input>
        <input
          type="text"
          className="px-4 py-3 mx-2 my-4 border-zinc-800 text-2xl border-4"
          placeholder="Enter Description Here"
          value={description}
          onChange={(element) => {
            setdescription(element.target.value); //two way binding
          }}
        ></input>
        <button className="text-white font-bold bg-red-700 px-3 py-5 rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 mx-10 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
