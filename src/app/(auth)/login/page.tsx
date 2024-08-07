"use client";
import AuthForm from "@/components/AuthForm";
import { baseInstance } from "@/services";
import { notifyError, notifySuccess } from "@/utils/notify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login: React.FC = () => {
  const route: AppRouterInstance = useRouter();
  const [message, setMessage] = useState(""); // Key to contain error message or username
  const [isSuccess, setIsSuccess] = useState(false); // Key to identify the API response is success or failure.

  /**
   * Handles the login process by sending a POST request with the provided username and password.
   * @param {Object} data - An object containing the username and password.
   */
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      const res = await baseInstance.post("/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(res.data?.message ?? res.data?.username);

      if (res.status === 200) {
        localStorage.setItem("token", res.data?.token);
        setIsSuccess(true);
        notifySuccess("Successfully logged In");
        route.replace("/products");
      } else {
        notifyError(res?.data?.message ?? "Something went wrong");
        setIsSuccess(false);
      }
    } catch (error: any) {
      notifyError(error?.response?.data?.message ?? "Something went wrong");
      setIsSuccess(false);
    }
  };

  /**
   * Effect to remove localStorage token at initial render.
   */
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen splash-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {isSuccess ? (
          <p className="text-green-500 text-center text-lg font-semibold">
            Welcome!
          </p>
        ) : (
          <AuthForm mode="Login" onSubmit={handleLogin} />
        )}
        {message && (
          <p
            className={`text-center mt-4 ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
