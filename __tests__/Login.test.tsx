import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Login from "@/app/(auth)/login/page";
import { baseInstance } from "../src/services";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../src/services", () => ({
  baseInstance: {
    post: jest.fn(),
  },
}));
describe("Login Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders login form", () => {
    render(<Login />);
  });

  test("displays error message on failed login", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 201,
      data: {
        message: "Invalid username or password",
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "wrongUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "wrongPassword" },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });

  test("displays error message on failed login wothout message", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 201,
      data: {},
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "wrongUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "wrongPassword" },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });

  test("displays error message on failed login catch", async () => {
    (baseInstance.post as jest.Mock).mockRejectedValueOnce({
      response: {
        status: 500,
        data: {
          message: "Invalid username or password",
        },
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "wrongUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "wrongPassword" },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });

  test("redirects to products page on successful login", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        message: "Welcome!",
        username: "testUser",
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "testUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "testPassword" },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });

  test("displays welcome message on successful login", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        username: "testUser",
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "testUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "testPassword" },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });

  test("password visiblity check", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        username: "testUser",
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "testUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "testPassword" },
      });
      fireEvent.click(screen.getByLabelText("toggle password visibility"));
    });
  });

  test("Error message test", async () => {
    (baseInstance.post as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: {
        username: "testUser",
      },
    });

    await act(async () => {
      render(<Login />);
    });

    act(() => {
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: "testUser" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: undefined },
      });
      fireEvent.click(screen.getByTestId("btn_login"));
    });
  });
});
