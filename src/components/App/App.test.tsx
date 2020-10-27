import React from "react";
import { render } from "@testing-library/react";
import App from ".";

describe("<App />", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    const app = container.querySelector(".App");
    expect(app).toBeInTheDocument();
  });
});
