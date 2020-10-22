import React from "react";
import {
  Layout,
  FormCard,
  FormElement,
  Button,
  Extra,
  FormContainer,
} from "components/AuthPages";
import Logo from "components/Logo";

export default function SignIn() {
  return (
    <Layout>
      <Logo normal />

      <FormCard>
        <h2>Login</h2>

        <FormContainer>
          <FormElement>
            <label htmlFor="email">
              Email address
              <input id="email" type="email" />
            </label>
          </FormElement>

          <FormElement>
            <label htmlFor="password">
              Password
              <input id="password" type="password" />
            </label>
          </FormElement>

          <Button>Login</Button>
        </FormContainer>

        <Extra>
          By continuing, you agree to Amazon&apos;s Conditions of Use and
          Privacy Notice.
        </Extra>
      </FormCard>
    </Layout>
  );
}
