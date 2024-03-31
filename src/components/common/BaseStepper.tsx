import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";

const CustomStepper = ({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) => (
  <Stepper
    alternativeLabel
    activeStep={0 || activeStep - 1}
  >
    {steps.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

export default CustomStepper;
