import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("<Header /> ", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("should render menu items", () => {
    const { getByText } = render(<Header />);

    const fileItem = getByText(/File/);
    const editItem = getByText(/Edit/);
    const viewItem = getByText(/View/);
    const searchItem = getByText(/Search/);
    const terminalItem = getByText(/Terminal/);
    const helpItem = getByText(/Help/);

    expect(fileItem).toBeInTheDocument();
    expect(editItem).toBeInTheDocument();
    expect(viewItem).toBeInTheDocument();
    expect(searchItem).toBeInTheDocument();
    expect(terminalItem).toBeInTheDocument();
    expect(helpItem).toBeInTheDocument();
  });
});
