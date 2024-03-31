export const filteredUserData = (data) => {
  const {
    name,
    email,
    password,
    cardNumber,
    paymentType,
    paymentEmail,
    confirmPassword
  } = data;
  const splittedName = name.split(' ');
  const paymentObj = {
    paymentMethod: {
      type: paymentType,
    }}

  if (paymentType === 'pp') {
    paymentObj.paymentMethod.email = paymentEmail;
  } else {
    paymentObj.paymentMethod.cardNumber = cardNumber;
  }
  
  return ({
    email: email,
    password: password,
    lastName: splittedName[1],
    firstName: splittedName[0],
    confirmPassword: confirmPassword,
    ...paymentObj,
  })
};