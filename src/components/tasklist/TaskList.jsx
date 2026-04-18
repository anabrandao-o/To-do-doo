import React, { useState, useEffect } from "react";
import { tasks as initialTasks } from "./List";
import { toggleTask } from "../../utils/checked";
import { Label } from "../tasklist/labels/labels";
import { formatTaskDate } from "../../utils/date";

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  function handleToggle(index) {
    const updated = toggleTask(tasks, index);
    setTasks(updated);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasklist">
      <div className="tasklist-container">
        <div className="tasklist-header">
          <h2>Minhas tarefas</h2>
          <hr />
        </div>

        <div className="tasklist-buttons">
          <button className="tasklist-button">Hoje</button>
          <button className="tasklist-button">Atrasadas</button>
          <button className="tasklist-button">Concluídos</button>
        </div>

        <div className="tasklist-content">
          <div className="tasklist-content--list">
            {tasks.map((task, index) => (
              <div key={index} className="tasklist-content--item">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleToggle(index)}
                />

                <h3>{task.Task}</h3>
                <p>{formatTaskDate(task.date)}</p>
                <Label task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;