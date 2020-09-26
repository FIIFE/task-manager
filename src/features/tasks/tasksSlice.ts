import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { v4 } from "uuid";
import arrayMove from "array-move";

export interface TaskType {
  id?: string;
  title: string;
  description?: string;
  colorId?: string;
}

export interface ColorType {
  id: string;
  hexValue: string;
}

export interface TasksStateType {
  tasks: Array<TaskType>;
  colors: Array<ColorType>;
}

const tasksInitialState: TasksStateType = {
  tasks: [],
  colors: [
    {
      id: "1",
      hexValue: "87D6E8",
    },
    {
      id: "2",
      hexValue: "8CE0C1",
    },
    {
      id: "3",
      hexValue: "EBE9B3",
    },
    {
      id: "4",
      hexValue: "EBCBAB",
    },
  ],
};

const tasks = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask(state, { payload: task }: PayloadAction<TaskType>) {
      state.tasks = [...state.tasks, task];
    },
    removeTask(state, { payload: id }: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    editTask(state, { payload: updatedTask }: PayloadAction<TaskType>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
      });
    },
    moveTask(
      state,
      {
        payload: { fromIndex, toIndex },
      }: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) {
      state.tasks = arrayMove(state.tasks, fromIndex, toIndex);
    },
  },
});

export const { addTask, editTask, removeTask, moveTask } = tasks.actions;
export default tasks.reducer;

export const createTask = (task: TaskType): AppThunk => async (dispatch) => {
  dispatch(addTask({ ...task, id: v4() }));
};
