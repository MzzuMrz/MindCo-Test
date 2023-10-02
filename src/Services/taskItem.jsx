import { useState } from "react";
import PropTypes from "prop-types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TaskItem = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleUpdate = async () => {
    try {
      setCompleted(!completed);

      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, { completed: !completed });
    } catch (error) {
      console.error(error);
      setCompleted(completed);
    }
  };

  const handleDelete = () => {
    try {
      setIsDeleting(true);
      onDelete(task.id);
    } catch (e) {
      console.log(e);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {isDeleting ? (
        <p>Borrando...</p>
      ) : (
        <div className="flex items-center space-x-4 p-2 hover:bg-gray-100 transition duration-300">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleUpdate}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <span
            className={`flex-2 ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.task}
          </span>
          <button
            onClick={handleDelete}
            className="p-2 bg-red-500 text-white rounded-lg focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
