import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type FormInputProps = {
  name: string;
  control: Control<any>;
  errors: Record<string, any>;
} & TextFieldProps;

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  errors,
  type = "text",
  variant = "outlined",
  ...rest
}) => {
  const [hide, setHide] = useState(true);

  /**
   * Handle view and hide the password.
   */
  const handleClickShowPassword = () => {
    setHide(!hide);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          className="bg-white rounded-t-md bg-opacity-80 focus:bg-opacity-90"
          {...rest}
          variant={variant}
          type={hide ? type : "text"}
          {...field}
          autoComplete="off"
          value={field.value ?? ""}
          fullWidth
          helperText={errors[name]?.message}
          error={!!errors[name]}
          {...{
            InputProps:
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {hide ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined,
          }}
        />
      )}
    />
  );
};

export default FormInput;
