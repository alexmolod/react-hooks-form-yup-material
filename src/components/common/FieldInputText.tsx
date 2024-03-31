import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
};

const FieldInputText = ({ type = "text", name, label, control }: Props) => (
  <div className="textfield">
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          fullWidth
          type={type}
          size="small"
          value={value}
          label={label}
          error={!!error}
          onChange={onChange}
          helperText={`${error?.message ? error?.message : ""}`}
        />
      )}
    />
  </div>
);

export default FieldInputText;
