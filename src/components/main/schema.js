import * as Yup from "yup";

import {
  nameRegex,
  emailRegex,
  passwordRegex,
  creditCardRegex
} from '../constants';

const checkFullName = (fullName) => {
  const splittedName = fullName.split(' ');
  const isValid = splittedName.every(name => name.length > 2) && splittedName.length > 1;

  return isValid;
}

export const validationSchema = [
  // Form 1
  Yup.object().shape({
    name: Yup
      .string()
      .required()
      .label("Name")
      .matches(nameRegex, 'Please enter valid name')
      .test('len', 'Full name must have min 2 words and 3 symbols', val => checkFullName(val)),
  }),
  // Form 2
  Yup.object().shape({
    email: Yup
      .string()
      .required()
      .label("Email")
      .matches(emailRegex, 'Please enter valid email'),
    password: Yup
      .string()
      .required()
      .label("Password")
      .matches(passwordRegex, 'min 8 characters, one uppercase, one number'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  }),
  // Form 3
  Yup.object().shape({
    paymentType: Yup.string().required().label("Payment Method"),
    paymentEmail: Yup.string().when('paymentType', {
      is: 'pp',
      then: (schema) => schema.required().matches(emailRegex, 'Please enter valid email'),
    }),
    cardNumber: Yup.string().when('paymentType', {
      is: 'cc',
      then: (schema) => schema.required().matches(creditCardRegex, 'Please enter valid number'),
    }),
  })
];

