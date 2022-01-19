import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import TodoList from "../../components/TodoList";

describe("TodoList RTL", () => {
  it("should render expected components", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("heading", { name: /Todo List/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /Your todo/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Add/ })).toBeInTheDocument();
  });

  it("displays todos upon submit", () => {
    const todos = ["Learn react-testing-library", "Do a presentation about it"];

    render(<TodoList />);
    const input = screen.getByRole("textbox", { name: /Your todo/ });
    const addButton = screen.getByRole("button", { name: /Add/ });
    // add two todos
    userEvent.type(input, todos[0]);
    userEvent.click(addButton);
    userEvent.type(input, todos[1]);
    userEvent.click(addButton);
    // now find all list items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    // verify text content
    expect(listItems[0]).toHaveTextContent(todos[0]);
    expect(listItems[1]).toHaveTextContent(todos[1]);

    // alternatively, we could loop over the listitems and use the 'within'
    // helper method to verify text content
    // https://stackoverflow.com/questions/57435680/whats-the-idiomatic-way-of-testing-a-list-with-dynamic-content-using-react-test
  });

  it("renders disabled button when todo value is empty", () => {
    render(<TodoList />);
    expect(screen.getByRole("button", { name: /Add/ })).toBeDisabled();
  });
});

describe("TodoList Enzyme", () => {
  it("should render expected components", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("input[name='todo']").exists()).toBeTruthy();
    expect(wrapper.find("button[type='submit']").exists()).toBeTruthy();
  });

  it("renders disabled button when todo value is empty", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("button[type='submit']").props().disabled).toBeTruthy();
  });
});

/**
 * EXAMPLE of helpful error message RTL provides:
 * 
 * TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/Your todo/`

    Here are the accessible roles:

      heading:

      Name "Todo List":
      <h2 />

      --------------------------------------------------
      textbox:

      Name "Your todo":
      <input
        aria-label="Your todo"
        name="todo"
        placeholder="Add todo..."
        required=""
        type="text"
        value=""
      />

      --------------------------------------------------
      button:

      Name "Add":
      <button
        type="submit"
      />

      --------------------------------------------------
      list:

      Name "":
      <ul />

      --------------------------------------------------
 */
