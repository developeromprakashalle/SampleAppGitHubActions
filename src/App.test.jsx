import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders Application test", () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, Vite!/i);
  expect(textElement).toBeInTheDocument();
});
