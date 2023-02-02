import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given the Info component", () => {
  describe("When is rendered", () => {
    test("Then it should show the message 'Calling...'", () => {
      const text = "Calling...";

      render(<Info />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show and empty string", () => {
      const emptyString = "";

      render(<Info />);

      const expectedString = screen.getByText(emptyString);

      expect(expectedString).toBeInTheDocument();
    });
  });
});
