import React from "react";
import { shallow } from "enzyme";
import FormCreate from "./FormCreate";

describe("FormCreate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
