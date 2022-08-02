import { Navigate, Outlet } from "react-router-dom";
import * as Path from "../utils/pathNames";
import { TOKEN } from "./getAuthInfos";

const ProtectRoutes = () => {
  return TOKEN === "true" ? <Outlet /> : <Navigate to={Path.REGISTER} />;
};

export default ProtectRoutes;
