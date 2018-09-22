import React from "react";
import renderer from "react-test-renderer";

import Input from "../input";

describe("Input component", () => {
  test("Input changes style when active", () => {
    const cmp = renderer.create(<Input value="TEST" />);
    expect(cmp).toMatchSnapshot();
  });
});
