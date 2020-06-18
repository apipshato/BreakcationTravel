import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("should not allowed click button if disabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.isDisabled")).not.toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.isDisabled")).not.toBeInTheDocument();
});

test("should render tag <a> tag ", () => {
  const { container } = render(<Button type ="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render tag <link> component ", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
