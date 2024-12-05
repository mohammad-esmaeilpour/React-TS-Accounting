import Logo from "../../components/Logo";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  const language = window.navigator.language;
  return (
    <div
      dir={language === "fa" || language === "ar" ? "rtl" : "ltr"}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="flex flex-col items-center gap-6">
        <Logo size={200} />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
