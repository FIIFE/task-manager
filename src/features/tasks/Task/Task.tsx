import React, { useState } from "react";
import styles from "./Task.module.css";
import { TaskType } from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../tasksSlice";
import { RootStateType } from "../../../app/rootReducer";
import { Chevron } from "../../../components/Chevron/Chevron";
import { MdEdit, MdDelete, MdDragHandle } from "react-icons/md";

interface TaskPropsType {
  task: TaskType;
}

export const Task: React.FC<TaskPropsType> = ({ task }) => {
  const [isDescToggled, setIsDescToggled] = useState<boolean>(false);
  const chevronDir = isDescToggled ? "up" : "down";

  const { colors } = useSelector((state: RootStateType) => state.tasks);
  const taskColorObj = colors.find((color) => color.id === task.colorId);
  const taskColor = taskColorObj ? `#${taskColorObj.hexValue}` : "#fff";

  const dispatch = useDispatch();
  const onDelClickHandler = () => {
    task.id && dispatch(removeTask(task.id));
  };

  const descToggleBtn = task.description ? (
    <div
      data-testid="toggle button"
      className={styles.descToggleBtn}
      onClick={() => setIsDescToggled(!isDescToggled)}
    >
      <Chevron direction={chevronDir} />
    </div>
  ) : null;

  const desc =
    task.description && isDescToggled ? (
      <div className={styles.desc}>{task.description}</div>
    ) : null;

  return (
    <div className={styles.cont} style={{ backgroundColor: taskColor }}>
      <div className={styles.topBarCont}>
        <div className={styles.dragBtn}>
          <MdDragHandle size={24} />
        </div>
        <div className={styles.title}>{task.title}</div>
        <div className={styles.ctrlsCont}>
          <div>
            <MdEdit size={24} />
          </div>
          <div onClick={onDelClickHandler}>
            <MdDelete size={24} />
          </div>
        </div>
      </div>
      {descToggleBtn}
      {desc}
    </div>
  );
};
