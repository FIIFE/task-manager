import React, { useState, ChangeEvent } from "react";
import { TaskType, editTask, createTask } from "../tasksSlice";
import styles from "./TaskForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { MdClose } from "react-icons/md";

interface TaskFormPropsType {
  task: TaskType;
  close: () => void;
}

export const TaskForm: React.FC<TaskFormPropsType> = ({ task, close }) => {
  const [newTask, setNewTask] = useState<TaskType>(task);
  const dispatch = useDispatch();
  const { colors } = useSelector((state: RootStateType) => state.tasks);
  const colorPicker = (
    <div className={styles.colorPicker}>
      {colors.map((color) => {
        const style: { backgroundColor: string; border?: string } = {
          backgroundColor: `#${color.hexValue}`,
        };
        if (newTask.colorId === color.id) {
          style.border = "1px solid black";
        }
        return (
          <div
            key={color.id}
            className={styles.colorBox}
            style={style}
            onClick={() => onColorChange(color.id)}
          ></div>
        );
      })}
    </div>
  );

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, title: event.target.value });
  };

  const onDescChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask({ ...newTask, description: event.target.value });
  };

  const onColorChange = (colorId: string) => {
    setNewTask({ ...newTask, colorId });
  };

  const onSaveClickHandler = () => {
    if (!newTask.title) {
      return;
    }
    if (newTask.id) {
      dispatch(editTask(newTask));
    } else {
      dispatch(createTask(newTask));
    }
    close();
  };

  return (
    <div className={styles.background}>
      <div className={styles.formCont}>
        <div className={styles.topBarCont}>
          <div className={styles.formTitle}>Task form</div>
          <div className={styles.closeBtn} onClick={close}>
            <MdClose size={24} />
          </div>
        </div>
        <div className={styles.titleField}>
          <div>Title</div>
          <input type="text" value={newTask.title} onChange={onTitleChange} />
        </div>
        <div className={styles.descField}>
          <div>Description</div>
          <textarea value={newTask.description} onChange={onDescChange} />
        </div>
        <div className={styles.bottomBarCont}>
          {colorPicker}
          <div className={styles.ctrls}>
            <button onClick={onSaveClickHandler}>Save</button>
            <button onClick={close}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
