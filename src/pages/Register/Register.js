import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { TitleReg } from '../../components/RegisterForm/Register.styled';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <TitleReg>Please enter your data to sign up</TitleReg>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
};
