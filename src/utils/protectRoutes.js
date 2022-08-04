import { Navigate, Outlet } from "react-router-dom";
import * as Path from "../utils/pathNames";
import { TOKEN } from "./getAuthInfos";

export const ProtectDefaultRoutes = () => {
  return TOKEN() === "true" ? <Outlet /> : <Navigate to={Path.REGISTER} />;
};

export const ProtectAdminRoutes = () => {
  return TOKEN() === "eurt" ? <Outlet /> : <Navigate to={Path.REGISTER} />;
};
