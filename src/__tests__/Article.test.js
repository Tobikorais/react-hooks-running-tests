import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
