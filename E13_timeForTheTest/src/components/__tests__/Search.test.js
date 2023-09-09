import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// Mock Fetch Handler
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  // expect(searchBtn).toBeInTheDocument();
  const searchInput = screen.getByTestId("searchInput")
  fireEvent.change(searchInput, { target: { value: "burger" }})
  fireEvent.click(searchBtn)
  // Screen should load 4 res cards
  const cardsAfterSearch = screen.getAllByTestId("resCard")
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(topRatedBtn)
  const cardsAfterFilter = screen.getAllByTestId("resCard")
  expect(cardsAfterFilter.length).toBe(14);
});