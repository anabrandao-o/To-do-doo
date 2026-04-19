import { isLate, isAlmostLate } from '../../../utils/date';

export interface Task {
  id: number;
  Task: string;
  date: string;
  checked: boolean;
}

interface LabelProps {
  task: Task;
}

export const Label = ({ task }: LabelProps) => {
  return (
    <div className="labels">
      {task.checked && (
        <div className="labels-checked">
          <span className="labels-checked-green">Concluída</span>
        </div>
      )}

      {!task.checked && isLate(task) && (
        <div className="labels-late">
          <span className="labels-late-red">Atrasada</span>
        </div>
      )}

      {!task.checked && !isLate(task) && isAlmostLate(task) && (
        <div className="labels-almostlate">
          <span className="labels-yellow">Conclua sua tarefa</span>
        </div>
      )}
    </div>
  );
};
