import { useState } from "react";
import { Divider } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import Form1 from "../forms/Form1";
import Form2 from "../forms/Form2";
import Form3 from "../forms/Form3";
import { steps } from '../constants';
import { filteredUserData } from '../helpers/filterdUserFormData';
import { validationSchema } from './schema';
import BaseStepper from "../common/BaseStepper";
import ButtonStepper from "../common/ButtonStepper";

const stepContent = (step: number) => {
  switch (step) {
    case 1:
      return <Form1 />;
    case 2:
      return <Form2 />;
    case 3:
      return <Form3 />;

    default:
      return <div>Not Found</div>;
  }
};

const FormRegistration = () => {
  const [activeStep, setActiveStep] = useState(1);
  const isLastStep = activeStep === steps.length;
  const currentValidationSchema = validationSchema[activeStep - 1];

  const formProps = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cardNumber: "",
      paymentEmail: "",
      paymentType: "pp",
      confirmPassword: "",
    }
  });

  const { handleSubmit } = formProps;

  const onSubmit = (value: any) => {
    const userData = filteredUserData(value)
    console.log("userData", userData);
  };

  const onClickNext = () => {
    if (isLastStep) {
      return handleSubmit(onSubmit)();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  const onClickBack = () => {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <BaseStepper activeStep={activeStep} steps={steps} />

      <Divider />

      <FormProvider {...formProps}>
        <form onSubmit={handleSubmit(onClickNext)}>
          {stepContent(activeStep)}
          <ButtonStepper
            steps={steps}
            activeStep={activeStep}
            onClickBack={onClickBack}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default FormRegistration;
