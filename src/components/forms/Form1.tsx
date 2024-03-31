import { useFormContext } from "react-hook-form";
import FieldInputText from "../common/FieldInputText";

const FormOne = () => {
  const { control } = useFormContext();

  return (
    <FieldInputText name="name" control={control} label="Name" />
  );
}

export default FormOne;
