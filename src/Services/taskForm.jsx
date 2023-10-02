import { useState } from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const TaskForm = ({ onCreate }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const sanitizedTaskName = DOMPurify.sanitize(taskName.trim());
      if (typeof onCreate === "function") {
        onCreate({ task: sanitizedTaskName, completed: false });
      }
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={taskName}
        maxLength="255"
        onChange={(e) => setTaskName(e.target.value)}
        className="py-2 px-4 w-75 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
        placeholder="Type a task..."
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default TaskForm;
