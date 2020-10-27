import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./index";
import { testStore } from "../../utils/testing";

function renderComponent(initialState = {}) {
  const store = testStore(initialState);

  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return container;
}

describe("<App />", () => {
  it("renders correctly", () => {
    const container = renderComponent();
    const app = container.querySelector(".App");
    expect(app).toBeInTheDocument();
  });
});
