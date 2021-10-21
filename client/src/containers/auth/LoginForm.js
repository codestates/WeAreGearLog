import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'

import { changeField, initializeForm,login } from '../../modules/auth';
import AuthForm from '../../Auth/AuthForm';
import {check} from '../../modules/user'

const LoginForm = ({history}) => {
  const dispatch = useDispatch();

  const { form,auth,authError,user } = useSelector(({ auth }) => ({
    form: auth.login,
    auth:auth.auth,
    authError:auth.authError,
    user:user.user
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {email,password} = form;
    dispatch(login({email,password}))
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default LoginForm;
