export function isLate(task) {
  if (task.checked) return false;

  const now = new Date();
  const taskDate = new Date(task.date);

  return taskDate < now;
}

export function isAlmostLate(task) {
  if (task.checked) return false;

  const now = new Date();
  const taskDate = new Date(task.date);

  const diff = taskDate - now; 

  const oneHour = 1000 * 60 * 60;

  return diff > 0 && diff <= oneHour;
}

export function formatTaskDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const time = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isToday) {
    return `Hoje às ${time}`;
  }
  return date.toLocaleDateString("pt-BR") + ` às ${time}`;
}