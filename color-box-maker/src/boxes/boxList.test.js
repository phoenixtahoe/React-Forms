import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./boxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box", function() {
    const list = render(<BoxList />);
    const hinput = list.getByLabelText("Height");
    fireEvent.change(hinput, { target: { value: '100px' }});
    const winput = list.getByLabelText("Width");
    fireEvent.change(winput, { target: { value: '100px' }});
    const cinput = list.getByLabelText("Color");
    fireEvent.change(cinput, { target: { value: 'red' }});
    const btn = list.getByText("Create Box");
    fireEvent.click(btn);

    expect(list.getByText("Remove")).toBeInTheDocument();
})