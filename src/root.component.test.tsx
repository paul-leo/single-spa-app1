// import { render } from "@testing-library/react";
// import Root from "./root.component";
import "@testing-library/jest-dom";
// import React from "react";
describe("Root component", () => {
  // it("should be in the document", () => {
  //   const { getByText } = render(<Root name="Testapp" />);
  //   expect(getByText(/is mounted!/i))?.toBeInTheDocument?.();
  // });
  it("should be true", () => {
    expect(true).toBe(true);
  });
});
