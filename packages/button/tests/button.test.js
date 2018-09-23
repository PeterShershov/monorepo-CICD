import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Button from "../src/button";

describe("Button component", () => {
  test("Button changes style onClick", () => {
    const cmp = shallow(<Button />);
    expect(cmp.hasClass("button_active")).toEqual(false);
    cmp.simulate("click");
    expect(cmp.hasClass("button_active")).toEqual(true);
  });
});
