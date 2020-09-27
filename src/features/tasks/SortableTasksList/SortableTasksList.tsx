import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import styles from "./SortableTasksList.module.css";
import { SortableTask } from "../SortableTask/SortableTask";
import { SortableContainer } from "react-sortable-hoc";

export const SortableTasksList = SortableContainer(() => {
  const { tasks } = useSelector((state: RootStateType) => state.tasks);

  const tasksList = tasks.map((task, index) => {
    return <SortableTask key={task.id} task={task} index={index} />;
  });

  return (
    <div className={styles.tasksList}>
      <div className={styles.title}>List of tasks</div>
      {tasksList}
    </div>
  );
});
