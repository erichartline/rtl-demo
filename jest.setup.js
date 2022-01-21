import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mswServer } from "./mocks/msw-worker";
// fetch polyfill needed for custom SWR fetcher
import "whatwg-fetch";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

configure({ adapter: new Adapter() });
