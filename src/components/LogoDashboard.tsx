/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import logo from "/logo-dash.png";

interface Props {
  size: number;
}

const LogoDashboard = ({ size }: Props) => {
  return (
    <Link to="/" title="logo">
      <img src={logo} width={size} />
    </Link>
  );
};

export default LogoDashboard
