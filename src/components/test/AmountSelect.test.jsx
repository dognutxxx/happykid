
import { render, screen, } from "@testing-library/react";
import {test, it} from 'vitest'
import AmountSelect from "../AmountSelect";
import React from "react";

test("Accordion test", () => {
  it("Should show title", () => {
   render(<AmountSelect/>)
   expect(screen.getByText("Quantity")).toBeInTheDocument();
  });
});
