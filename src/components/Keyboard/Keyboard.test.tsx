import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given the Keyboard Comoponent", () => {
  describe("When is rendered", () => {
    test("Then it should show a button with text 'delete'", () => {
      render(<Keyboard />);
      const button = screen.getByRole("button", {
        name: "delete",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
