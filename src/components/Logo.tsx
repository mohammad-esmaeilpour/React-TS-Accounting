/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import logo from "/logo.png";

interface Props {
  size: number;
}

const Logo = ({ size }: Props) => {
  return (
    <Link to="/" title="logo">
      <img src={logo} width={size} />
    </Link>
  );
};

export default Logo;
