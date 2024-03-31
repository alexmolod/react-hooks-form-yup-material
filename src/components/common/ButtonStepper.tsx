import { Button } from "@mui/material";

type Props = {
  steps: string[];
  activeStep: number;
  onClick?: () => void;
  onClickBack?: () => void;
  loading?: boolean;
};

const ButtonStepper = ({
  steps,
  onClick,
  activeStep,
  onClickBack,
}: Props) => {
  const isLastStep = activeStep === steps.length;

  return (
    <div className="button_stepper">
      {activeStep > 1 && (
        <Button
          type="button"
          color="primary"
          variant="outlined"
          onClick={onClickBack}
        >
          Back
        </Button>
      )}
      <Button
        type="submit"
        color="primary"
        onClick={onClick}
        variant="contained"
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
}

export default ButtonStepper;
