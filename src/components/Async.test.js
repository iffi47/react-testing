import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component",() => {
test("renders host",async() => {
  render(<Async/>);
  const listItemElements = await screen.findAllByRole("listitem",{exact: false});
  expect(listItemElements).not.toHaveLength(0);
});

})