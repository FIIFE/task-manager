import React from "react";
import { render, screen } from "@testing-library/react";
import { SortableTask } from "../SortableTask";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("<SortableTask />", () => {
  it("renders toggle button when task has description", () => {
    const task = {
      id: "someid1",
      title: "task 1",
      description: "Lorem ipsum dolor sit amet.",
      colorId: "1",
    };
    render(
      <Provider store={store}>
        <SortableTask task={task} index={0} />
      </Provider>
    );
    expect(screen.queryByTestId("toggle button")).toBeInTheDocument();
  });
});
