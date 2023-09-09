import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const resName = screen.getByText("McDonald's");
    expect(resName).toBeInTheDocument();
})

// it("Should render RestaurantCard component with Promoted Label", () => {
//     render(<RestaurantCard resData={MOCK_DATA}/>);
//     const promotedLabel = screen.getByText("Promoted");
//     expect(promotedLabel).toBeInTheDocument();
// })