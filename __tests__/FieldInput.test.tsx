import FormInput from "@/components/FormInput";
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Create a wrapper component to provide the form context
const Wrapper = ({ children }: { children: ReactElement }) => {
  const methods = useForm({
    defaultValues: {
      testInput: "",
    },
    mode: "onChange",
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

test("renders SampleComponent", () => {
  render(
    <Wrapper>
      <FormInput
        name="Login"
        control={undefined as any}
        errors={{
          Login: {
            message: "aoufgwuie",
          },
        }}
      />
    </Wrapper>
  );
});
