/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";

test("App renders without errors", () => {
  act(() => {
    render(<App />);
  });
});
