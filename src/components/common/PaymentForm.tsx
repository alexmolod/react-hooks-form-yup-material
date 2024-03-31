import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import FieldInputText from "./FieldInputText";

type Props = {
  control: any;
  name: string;
};

const options = [
  {
    label: "PayPal",
    value: "pp",
  },
  {
    label: "Credit Card",
    value: "cc",
  },
];

const PaymentForm = ({ name, control }: Props) => {
  return (
    <div className="radio_button">
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
        }) => (
          <>
            <RadioGroup value={value} onChange={onChange}>
              {options.map((singleOption) => (
                <FormControlLabel
                  control={<Radio />}
                  key={singleOption.value}
                  value={singleOption.value}
                  label={singleOption.label}
                />
              ))}
            </RadioGroup>
            {value === 'pp' && (
              <FieldInputText
                control={control}
                name="paymentEmail"
                label="Payment Email"
              />
            )}
            {value === 'cc' && (
              <FieldInputText
                control={control}
                name="cardNumber"
                label="Card Number"
              />
            )}
          </>
        )}
      />
    </div>
  );
};

export default PaymentForm;
