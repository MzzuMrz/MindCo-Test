import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { useAuth } from "../Auth/useAuth";
import { Navigate, Link } from "react-router-dom";
import TaskForm from "../Services/taskForm";
import TaskItem from "../Services/taskItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleCreate = async (task) => {
    try {
      setLoading(true);
      const taskData = {
        task: task.task,
        completed: false,
        userId: user.uid,
      };
      const docRef = await addDoc(collection(db, "tasks"), taskData);
      setTasks([...tasks, { id: docRef.id, ...taskData }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const taskRef = doc(db, "tasks", id);
      await deleteDoc(taskRef);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "tasks"), where("userId", "==", user.uid))
        );
        const tasksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksList);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4">Bienvenido {user.email}</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
      >
        Sign Out
      </button>
      <div className="my-4">
        <p className="text-sm">
          Change
          <Link
            to="/change-password"
            className="text-blue-500 hover:text-blue-700 mx-1"
          >
            password
          </Link>
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Task List</h1>
        <h3 className="text-lg font-medium text-gray-600">
          What you have to do?
        </h3>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <TaskForm onCreate={handleCreate} />
      )}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Dashboard;
