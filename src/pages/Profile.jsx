import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "store/selectors/user";
import { Button } from "components";
import { useDispatch } from "react-redux";
import * as actionTypes from "store/actionTypes";
import Routes from "constants/Routes";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useAuth();

  const handleSignOut = () => {
    dispatch({
      type: actionTypes.SIGN_OUT,
    });
    history.push(Routes.HOME);
  };

  return (
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
  );
}
