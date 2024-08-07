"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";

interface AuthFormProps {
  mode: "Login";
  onSubmit: (data: { username: string; password: string }) => Promise<void>;
}

// Define the validation schema using zod
const schema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, "Username must be at least 3 characters long"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters long"),
});

type FormValues = z.infer<typeof schema>;

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">{mode}</h2>
      <FormInput
        type="text"
        name="username"
        label="Username"
        control={control}
        errors={errors}
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        control={control}
        errors={errors}
      />
      <Button
        data-testid="btn_login"
        type="submit"
        variant="contained"
        color="primary"
        className="w-full"
      >
        {mode}
      </Button>
    </form>
  );
};

export default AuthForm;
