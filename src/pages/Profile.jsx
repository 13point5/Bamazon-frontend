import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "store/selectors/user";
import { MainLayout } from "containers";
import { Button } from "components";
import { useDispatch } from "react-redux";
import * as actionTypes from "store/actionTypes";
import routes from "constants/routes";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useAuth();

  const handleSignOut = () => {
    dispatch({
      type: actionTypes.SIGN_OUT,
    });
    history.push(routes.HOME);
  };

  return (
    <MainLayout>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1>Welcome, {user.name}</h1>

        <Button type="button" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </MainLayout>
  );
}
