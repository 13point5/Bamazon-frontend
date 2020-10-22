import { useSelector } from "react-redux";

export function useAuth() {
  return useSelector((store) => store.user);
}
