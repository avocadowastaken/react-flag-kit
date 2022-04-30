import { render, screen } from "@testing-library/react";
import React, { createRef } from "react";
import { FlagIcon } from "./FlagIcon";

test("basic", () => {
  render(<FlagIcon code="US" />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
    <img
      alt="US"
      height="24"
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
      width="24"
    />
  `);
});

test("ref", () => {
  const ref = createRef<HTMLImageElement>();
  render(<FlagIcon ref={ref} code="US" />);
  expect(screen.getByRole("img")).toBe(ref.current);
});

test("alt", () => {
  render(<FlagIcon code="US" size={64} alt="USA" />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
    <img
      alt="USA"
      height="64"
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
      width="64"
    />
  `);
});

test("size", () => {
  render(<FlagIcon code="US" size={64} />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
    <img
      alt="US"
      height="64"
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
      width="64"
    />
  `);
});

test("width", () => {
  render(<FlagIcon code="US" size={64} width={128} />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
    <img
      alt="US"
      height="64"
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
      width="128"
    />
  `);
});

test("height", () => {
  render(<FlagIcon code="US" size={64} height={128} />);

  expect(screen.getByRole("img")).toMatchInlineSnapshot(`
    <img
      alt="US"
      height="128"
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
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
      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
      style="margin: .5em;"
      width="24"
    />
  `);
});
