import React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "../Task";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("<Task />", () => {
  it("renders toggle button when task has description", () => {
    const task = {
      id: "someid1",
      title: "task 1",
      description: "Lorem ipsum dolor sit amet.",
      colorId: "1",
    };
    render(
      <Provider store={store}>
        <Task task={task} />
      </Provider>
    );
    expect(screen.queryByTestId("toggle button")).toBeInTheDocument();
  });
});
