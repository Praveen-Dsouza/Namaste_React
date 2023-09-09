import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load Restuarant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Burgers & Wraps (15)");
  fireEvent.click(accordianHeader);
  const foodItemsLength = screen.getAllByTestId("foodItems").length;
  expect(foodItemsLength).toBe(15);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  // Add Item in Cart
  fireEvent.click(addBtns[0]); // click on first btn

  // Update Header Cart Value
  const cartItem = screen.getByText("Cart - (1 items)");
  expect(cartItem).toBeInTheDocument();

  // Add New Item
  fireEvent.click(addBtns[0]);
  const cartItem2 = screen.getByText("Cart - (2 items)");
  expect(cartItem2).toBeInTheDocument();

  // Cart Page should have 2 items
  expect(screen.getAllByTestId("foodItems").length).toBe(17); // 17 because we use itemList comp so it has same Id

  // Clear Cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
  const cartEmpty = screen.getByText("Cart - (0 items)");
  expect(cartEmpty).toBeInTheDocument();
});
