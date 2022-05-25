import React, { useContext, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
const NewTodo = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    { id: 1, description: "Wash Clothes", state: false },
    { id: 2, description: "Study For Exams", state: false },
    { id: 3, description: "Buy Food", state: true },
  ]);
  const [value, setValue] = useState("");
  const updateValue = (e) => {
    setValue(e.target.value);
    console.log(value);
    console.log(items);
  };
  const newValue = (e) => {
    e.preventDefault();
    if(value!=""){
        let len = items.length+1;
        let object = {id: len, description: value, state: false};
        console.log(object)
        setItems([...items, object]);
        setValue("")
    }
  };
  return (
    <div class="h-100">
      <button class="m-5 mt-9">
        {!show && (
          <MdAdd
            class="bg-indigo-500 hover:cursor-pointer w-10 h-10 m-5 mt-9 hover:bg-indigo-400 hover:w-11"
            onClick={() => setShow(true)}
          ></MdAdd>
        )}
        {show && (
          <MdClose
            class="bg-indigo-500 hover:cursor-pointer w-10 h-10 m-5 mt-9 hover:bg-indigo-400 hover:w-11"
            onClick={() => setShow(false)}
          ></MdClose>
        )}
      </button>
      {show && (
        <div>
          <form class="p-1 m-1" onSubmit={newValue}>
            <input
              class="w-2/6 ml-3 p-1"
              type="text"
              name="name"
              placeholder="Enter the TODO item"
              value={value}
              onChange={updateValue}
            />
            <input
              class="w-15 text-black hover:bg-indigo-400 hover:cursor-pointer bg-indigo-500 pl-3 pr-3 pt-1 ml-3 mr-1 pb-1"
              type="submit"
              value="ADD"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default NewTodo;
