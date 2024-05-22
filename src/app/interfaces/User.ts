export interface User {
  uid: string;
  email: string;
  userInformation: {
    names: string;
    lastName: string;
    date: string;
    gender: string;
    telephone: number;
    street: string;
    zipCode: number;
    numberStreet: number;
    city: string;
    state: string;
    intNumber: number;
    crossStreet1: string;
    crossStreet2: string;
  };
}
