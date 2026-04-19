export function toggleTask(tasks, index) {
  return tasks.map((task, i) => {
    if (i === index) {
      return { ...task, checked: !task.checked };
    }
    return task;
  });
}
