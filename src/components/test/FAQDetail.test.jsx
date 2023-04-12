
import { render, screen, } from "@testing-library/react";
import {test, it} from 'vitest'
import FAQDetail from "../FAQDetail";
import React from "react";

test("FAQDetail", () => {
  it("Should show title", () => {
   render(<FAQDetail/>)
   expect(screen.getByText("How do I add a new question & answer?")).toBeInTheDocument();
  });
});
