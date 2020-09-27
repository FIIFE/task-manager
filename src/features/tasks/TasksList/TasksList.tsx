import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import styles from "./TasksList.module.css";
import { Task } from "../Task/Task";

export const TasksList: React.FC = () => {
  const { tasks } = useSelector((state: RootStateType) => state.tasks);

  const tasksList = tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });

  return (
    <div className={styles.tasksList}>
      <div className={styles.title}>List of tasks</div>
      {tasksList}
    </div>
  );
};
