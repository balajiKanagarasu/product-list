import SideBar from "@/components/SideBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

// Mock the `useRouter` hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Layout Component", () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**
   * Case to test whether backdrop Yes click of confrimation dialog fine or not.
   */
  test("logout yes click", () => {
    render(
      <SideBar>
        <div>Test Content</div>
      </SideBar>
    );

    fireEvent.click(screen.getByTestId("LogoutIcon"));
    fireEvent.click(screen.getByText("Yes"));
  });

  /**
   * Case to test whether No click of confrimation dialog fine or not.
   */
  test("logout No click", () => {
    render(
      <SideBar>
        <div>Test Content</div>
      </SideBar>
    );

    fireEvent.click(screen.getByTestId("LogoutIcon"));
    fireEvent.click(screen.getByText("No"));
  });

  /**
   * Case to test whether backdrop click of confrimation dialog fine or not.
   */
  test("logout backdrop click", () => {
    render(
      <SideBar>
        <div>Test Content</div>
      </SideBar>
    );

    fireEvent.click(screen.getByTestId("LogoutIcon"));
    const backdrop = document.querySelector(".MuiBackdrop-root");
    fireEvent.click(backdrop as Element);
  });

  /**
   * Case to test whether Navbar click is working fine or not.
   */
  test("product click", () => {
    render(
      <SideBar>
        <div>Test Content</div>
      </SideBar>
    );

    fireEvent.click(screen.getByText("Product"));
  });
});
