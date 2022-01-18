import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import HelloWorld from "../../components/HelloWorld";

describe("HelloWorld RTL", () => {
  it("should render Hello, World", () => {
    render(<HelloWorld />);
    expect(screen.getByText(/Hello, World!/)).toBeInTheDocument();
  });
});

describe("HelloWorld Enzyme", () => {
  it("should render Hello, World", () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.text()).toEqual("Hello, World!");
  });
});

/**
 * render will render into a container that is appended to document.body (tests using the DOM)
 * shallow will render the component as a unit, ensures that tests aren't indirectly asserting on behavior of child components
 * mount is full DOM rendering
 */
