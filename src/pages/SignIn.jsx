import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { PulseLoader } from "react-spinners";
import { Button } from "components";
import {
  Layout,
  FormCard,
  FormElement,
  Extra,
  FormContainer,
} from "components/AuthPages";
import Logo from "components/Logo";

import * as userActions from "store/actions/user";
import Routes from "constants/Routes";
import { useIsMounted } from "hooks";

export default function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(userActions.signIn())
      .then(() => {
        history.push(Routes.HOME);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
  };

  return (
    <Layout>
      <Logo normal />

      <FormCard>
        <h2>Login</h2>

        <FormContainer onSubmit={handleSubmit} disabled={loading}>
          <FormElement>
            <label htmlFor="email">
              Email address
              <input name="email" id="email" type="email" />
            </label>
          </FormElement>

          <FormElement>
            <label htmlFor="password">
              Password
              <input name="password" id="password" type="password" />
            </label>
          </FormElement>

          <Button type="submit" disabled={loading} width="100%">
            {loading ? <PulseLoader size={6} /> : "Login"}
          </Button>
        </FormContainer>

        <Extra>
          By continuing, you agree to Amazon&apos;s Conditions of Use and
          Privacy Notice.
        </Extra>
      </FormCard>
    </Layout>
  );
}
