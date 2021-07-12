import LoginLayout from '../components/LoginLayout';
import LoginNav from '../components/loginNav';
import SignupForm from '../components/signupForm';

const Signup = () => {

  return (
    <LoginLayout>
      <LoginNav currentPage='/signup' />
      <SignupForm />
    </LoginLayout>
  );
};

export default Signup;