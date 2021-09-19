import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function() {
  const list = render(<TodoList />);
  const input = list.getByLabelText("TodoList!");
  fireEvent.change(input, { target: { value: 'testing content!' }});
  const btn = list.getByText("Create Todo!");
  fireEvent.click(btn);

  expect(list.getByLabelText("TodoList!")).toHaveValue("");
  expect(list.getByText("Remove")).toBeInTheDocument();
})