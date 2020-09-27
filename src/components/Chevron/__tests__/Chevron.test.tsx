import React from "react";
import { render, screen } from "@testing-library/react";
import { Chevron } from "../Chevron";

describe("<Chevron />", () => {
  it("renders chevron up icon when passed direction prop of value 'up'", () => {
    render(<Chevron direction="up" />);
    expect(screen.queryByTestId("chevron up")).toBeInTheDocument();
  });

  it("renders chevron down icon when passed direction prop of value 'down'", () => {
    render(<Chevron direction="down" />);
    expect(screen.queryByTestId("chevron down")).toBeInTheDocument();
  });
});
