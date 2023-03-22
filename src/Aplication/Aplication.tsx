import { Routes, Route } from 'react-router-dom';
import { HOME, PROFILE, LOG_IN, SIGN_IN } from '../utils/path';

import './index.scss';

import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { Layout } from '../Layout';
import { SingIn } from '../pages/SignIn';
import { Login } from '../pages/Login';

const Aplication = (): JSX.Element => {
  return (
    <Routes>
      <Route path={HOME.path} element={<Layout />}>
        <Route path={HOME.path} element={<Home />} />
        <Route path={PROFILE.path} element={<Profile />} />
      </Route>
      <Route path={SIGN_IN.path} element={<SingIn />} />
      <Route path={LOG_IN.path} element={<Login />} />
    </Routes>
  );
};

export default Aplication;
