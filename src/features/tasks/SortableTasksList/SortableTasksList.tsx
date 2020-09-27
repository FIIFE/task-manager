import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import styles from "./SortableTasksList.module.css";
import { SortableTask } from "../SortableTask/SortableTask";
import { SortableContainer } from "react-sortable-hoc";
import { MdAdd } from "react-icons/md";
import { TaskForm } from "../TaskForm/TaskForm";

export const SortableTasksList = SortableContainer(() => {
  const { tasks } = useSelector((state: RootStateType) => state.tasks);
  const [isFormToggled, setIsFormToggled] = useState(false);

  const tasksList = tasks.map((task, index) => {
    return <SortableTask key={task.id} task={task} index={index} />;
  });

  return (
    <div className={styles.tasksList}>
      <div className={styles.topBarCont}>
        <div className={styles.title}>List of tasks</div>
        <div className={styles.addBtn} onClick={() => setIsFormToggled(true)}>
          <MdAdd size={24} />
        </div>
      </div>
      {tasksList}
      {isFormToggled && (
        <TaskForm task={{ title: "" }} close={() => setIsFormToggled(false)} />
      )}
    </div>
  );
});
