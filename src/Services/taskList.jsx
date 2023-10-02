import PropTypes from "prop-types";
import TaskItem from "./taskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
