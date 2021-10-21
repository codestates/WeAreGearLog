import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../Auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';
const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };
  console.log('123123', user);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ email, username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('1231312313', user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default withRouter(RegisterForm);
