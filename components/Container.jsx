import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <h1>TO DO APP</h1>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;
