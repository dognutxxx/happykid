
import { render, screen, } from "@testing-library/react";
import {test, it} from 'vitest'
import FilterProduct from "../FilterProduct";
import React from "react";

test("FilterProduct", () => {
  it("Should show title", () => {
   render(<FilterProduct/>)
   expect(screen.getByText("Collection")).toBeInTheDocument();
  });
});
