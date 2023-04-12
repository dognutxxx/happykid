
import { render, screen, } from "@testing-library/react";
import {test, it} from 'vitest'
import CollectionDetail from "../CollectionDetail";
import React from "react";

test("Accordion test", () => {
  it("Should show title", () => {
   render(<CollectionDetail/>)
   expect(screen.getByText("Shop Collection")).toBeInTheDocument();
  });
});
