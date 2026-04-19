import React, { useState, useEffect } from 'react';
import { tasks as initialTasks } from './List';
import { toggleTask } from '../../utils/checked';
import { Label } from '../tasklist/labels/labels';
import { formatTaskDate, isAlmostLate } from '../../utils/date';
import { ButtonFilter } from './buttons/button';
import { isLate } from '../../utils/date';

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  function handleToggle(index) {
    const updated = toggleTask(tasks, index);
    setTasks(updated);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'today') {
      return formatTaskDate(task.date) === formatTaskDate(new Date());
    }

    if (filter === 'late') {
      return isLate(task);
    }

    if (filter === 'done') {
      return task.checked;
    }

    if (filter === 'now') {
      return isAlmostLate(task);
    }

    return true;
  });

  return (
    <div className="tasklist">
      <div className="tasklist-container">
        <div className="tasklist-header">
          <h2>Minhas tarefas</h2>
          <hr />
        </div>

        <div className="tasklist-buttons">
          <ButtonFilter filter={filter} setFilter={setFilter} />
        </div>

        <div className="tasklist-content">
          <div className="tasklist-content--list">
            {filteredTasks.map((task, id) => (
              <div key={id} className="tasklist-content--item">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => handleToggle(id)}
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
