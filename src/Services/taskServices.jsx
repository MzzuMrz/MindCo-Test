import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createTask = async (newTask) => {
  return await addDoc(collection(db, "tasks"), {
    task: newTask,
    completed: false,
  });
};

export const updateTask = async (id, updatedTask) => {
  const taskRef = doc(db, "tasks", id);
  return await updateDoc(taskRef, { task: updatedTask });
};

export const deleteTask = async (id) => {
  const taskRef = doc(db, "tasks", id);
  return await deleteDoc(taskRef);
};

export const toggleCompleted = async (id, isCompleted) => {
  const taskRef = doc(db, "tasks", id);
  return await updateDoc(taskRef, { completed: !isCompleted });
};
