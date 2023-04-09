import { render, screen } from "@testing-library/react";
import Menubar from "../components/Menubar";

it("my test case 1", () => {
  render(<Menubar />);

  expect(screen.getAllByTestId("li").length).tobe(3);
});
