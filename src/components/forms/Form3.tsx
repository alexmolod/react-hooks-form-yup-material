import { useFormContext } from "react-hook-form";
import PaymentForm from "../common/PaymentForm";

const FormThree = () => {
  const { control } = useFormContext();

  return (
    <PaymentForm
      control={control}
      name="paymentType"
    />
  );
}

export default FormThree;
