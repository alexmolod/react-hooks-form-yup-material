import { useFormContext } from "react-hook-form";
import FieldInputText from "../common/FieldInputText";


const FormTwo = () => {
  const { control } = useFormContext();

  return (
    <>
      <FieldInputText
        type="email"
        name="email"
        label="Email"
        control={control}
      />
      <FieldInputText
        type="password"
        name="password"
        label="Password"
        control={control}
      />
      <FieldInputText
        type="password"
        control={control}
        name="confirmPassword"
        label="Password Confirm"
      />
    </>
  );
}

export default FormTwo;
