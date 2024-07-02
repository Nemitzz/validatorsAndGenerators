import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import validaCPF from '../pages/validaCPF';
import geraCPF from '../pages/geraCPF';
import Page404 from '../pages/page404';
import GeraSenha from '../pages/geraSenha';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/validaCPF" component={validaCPF} />
      <MyRoute exact path="/geraCPF" component={geraCPF} />
      <MyRoute exact path="/geraSenha" component={GeraSenha} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
