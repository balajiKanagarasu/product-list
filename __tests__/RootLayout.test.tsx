import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";
import Home from "@/app/page";

test("renders SampleComponent", () => {
  render(
    <RootLayout>
      <Home />
    </RootLayout>
  );
});
