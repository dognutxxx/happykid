
import { render, screen, } from "@testing-library/react";
import {test, it} from 'vitest'
import ContactDetail from "../ContactDetail";
import React from "react";

test("Accordion test", () => {
  it("Should show title", () => {
   render(<ContactDetail/>)
   expect(screen.getByText("VISIT US")).toBeInTheDocument();
  });
});
