import tasks, {
  addTask,
  editTask,
  removeTask,
  moveTask,
  TasksStateType,
} from "../tasksSlice";

describe("tasks reducer", () => {
  let initialState: TasksStateType;
  beforeEach(() => {
    initialState = {
      tasks: [
        {
          id: "someid1",
          title: "task 1",
          description: "description 1",
          colorId: "1",
        },
        {
          id: "someid2",
          title: "task 2",
        },
        {
          id: "someid3",
          title: "task 3",
          description: "description 3",
        },
      ],
      colors: [
        {
          id: "1",
          hexValue: "87D6E8",
        },
      ],
    };
  });

  it("handles addTask correctly", () => {
    expect(
      tasks(initialState, {
        type: addTask.type,
        payload: {
          id: "someid4",
          title: "task 4",
          description: "description 4",
          colorId: "1",
        },
      })
    ).toEqual({
      tasks: [
        {
          id: "someid1",
          title: "task 1",
          description: "description 1",
          colorId: "1",
        },
        {
          id: "someid2",
          title: "task 2",
        },
        {
          id: "someid3",
          title: "task 3",
          description: "description 3",
        },
        {
          id: "someid4",
          title: "task 4",
          description: "description 4",
          colorId: "1",
        },
      ],
      colors: [
        {
          id: "1",
          hexValue: "87D6E8",
        },
      ],
    });
  });

  it("handles editTask correctly", () => {
    expect(
      tasks(initialState, {
        type: editTask.type,
        payload: {
          id: "someid1",
          title: "task 1 edited",
          description: "description 1 edited",
        },
      })
    ).toEqual({
      tasks: [
        {
          id: "someid1",
          title: "task 1 edited",
          description: "description 1 edited",
        },
        {
          id: "someid2",
          title: "task 2",
        },
        {
          id: "someid3",
          title: "task 3",
          description: "description 3",
        },
      ],
      colors: [
        {
          id: "1",
          hexValue: "87D6E8",
        },
      ],
    });
  });

  it("handles removeTask correctly", () => {
    expect(
      tasks(initialState, {
        type: removeTask.type,
        payload: "someid2",
      })
    ).toEqual({
      tasks: [
        {
          id: "someid1",
          title: "task 1",
          description: "description 1",
          colorId: "1",
        },
        {
          id: "someid3",
          title: "task 3",
          description: "description 3",
        },
      ],
      colors: [
        {
          id: "1",
          hexValue: "87D6E8",
        },
      ],
    });
  });

  it("handles moveTask correctly", () => {
    expect(
      tasks(initialState, {
        type: moveTask.type,
        payload: {
          fromIndex: 0,
          toIndex: 1,
        },
      })
    ).toEqual({
      tasks: [
        {
          id: "someid2",
          title: "task 2",
        },
        {
          id: "someid1",
          title: "task 1",
          description: "description 1",
          colorId: "1",
        },

        {
          id: "someid3",
          title: "task 3",
          description: "description 3",
        },
      ],
      colors: [
        {
          id: "1",
          hexValue: "87D6E8",
        },
      ],
    });
  });
});
