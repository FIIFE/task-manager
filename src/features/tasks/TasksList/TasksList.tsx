import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import styles from "./TasksList.module.css";

export const TasksList: React.FC = () => {
  const { tasks } = useSelector((state: RootStateType) => state.tasks);

  const tasksList = tasks.map((task) => {
    return <div>{task.title}</div>;
  });

  return (
    <>
      <div className={styles.tasksList}>{tasksList}</div>
    </>
  );
};
