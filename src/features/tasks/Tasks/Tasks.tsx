import React from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../tasksSlice";
import { SortableContainer } from "react-sortable-hoc";
import { SortableTasksList } from "../SortableTasksList/SortableTasksList";
import styles from "./Tasks.module.css";

export const Tasks = SortableContainer(() => {
  const dispatch = useDispatch();
  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    dispatch(moveTask({ fromIndex: oldIndex, toIndex: newIndex }));
  };
  return (
    <div className={styles.tasksCont}>
      <SortableTasksList onSortEnd={onSortEnd} useDragHandle />
    </div>
  );
});
