import "@testing-library/jest-dom";
import { mswServer } from "./mocks/msw-worker";
import "whatwg-fetch"; // fetch polyfill needed for custom SWR fetcher

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
