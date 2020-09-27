import React from "react";
import { useDispatch } from "react-redux";
import { moveTask } from "../tasksSlice";
import { SortableContainer } from "react-sortable-hoc";
import { SortableTasksList } from "../SortableTasksList/SortableTasksList";

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
  return <SortableTasksList onSortEnd={onSortEnd} useDragHandle />;
});
