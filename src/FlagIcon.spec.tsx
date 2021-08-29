import { render, screen } from "@testing-library/react";
import React from "react";
import { FlagIcon } from "./FlagIcon";

test("basic", () => {
  render(<FlagIcon code="US" />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
<img
  alt="US"
  height="24"
  src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/US.svg"
  width="24"
/>
`);
});

test("size", () => {
  render(<FlagIcon code="US" size={64} />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
<img
  alt="US"
  height="64"
  src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/US.svg"
  width="64"
/>
`);
});

// https://github.com/umidbekk/react-flag-kit/issues/30
test("style", () => {
  render(<FlagIcon code="US" style={{ margin: ".5em" }} />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
<img
  alt="US"
  height="24"
  src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/US.svg"
  style="margin: .5em;"
  width="24"
/>
`);
});
