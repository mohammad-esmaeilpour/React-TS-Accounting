import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "src/components/icons/LeftArrowIcon";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import AuthLayout from "./AuthLayout";
import { DataProps } from "src/data/fa";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const ConfirmCode = () => {
  // hook's
  const navigate = useNavigate();
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const user: any = useAppSelector((state) => state.userReducer);
  const [nextInput, setNextInput] = useState(1);
  const buttonRef = useRef<null | HTMLButtonElement>(null);
  const language = window.navigator.language;

  // hook form
  const { handleSubmit, register, setFocus } = useForm();

  useEffect(() => {
    setFocus(`otpcode ${nextInput}`);
  }, [setFocus, setNextInput, nextInput]);

  // services
  const onSubmit = (datas: FieldValues) => {
    let otpcode: string = "";
    const concat = Object.entries(datas);
    concat.map((item) => (otpcode = otpcode?.concat(item[1])));

    DynamicService({
      method: "post",
      service: "user/verify",
      payload: { otpcode, identifier: user.identifier },
    }).then((response: any) => {
      Cookies.set("Authorization", response.data.token);
      response.status === 200 && navigate("/");
    });
  };

  return (
    <AuthLayout>
      <div className="card">
        <div className="flex items-baseline justify-between">
          <h1 className="card-title">{data.confirm.title}</h1>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1"
          >
            <div className="c-red family-regular text-xs">
              {data.confirm.goBack}
            </div>
            <div
              className={`relative ${
                language === "en" || language === "tr"
                  ? "rotate-180"
                  : "rotate-0"
              }`}
            >
              <LeftArrowIcon size={11} />
            </div>
          </button>
        </div>
        <p className="py-6">{data.confirm.description}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* inputs */}
          <div className="flex justify-center gap-3.5">
            {data.confirm.inputs.map((item) => (
              <div key={item.id} className="relative mb-3">
                <input
                  autoComplete="off"
                  {...register(item.id, { required: true, maxLength: 1 })}
                  id={item.id}
                  maxLength={1}
                  type={"text"}
                  onInput={() => {
                    setNextInput(item.counter + 1);
                  }}
                  placeholder="___"
                  className="w-[61px] text-center placeholder:text-gray-200 placeholder:translate-y-2 rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <p className="mt-6">{data.confirm.resend}</p>
            <p className="mt-6 family-bold">{user.otp}</p>
          </div>

          <button
            ref={buttonRef}
            type="submit"
            className="btn-primary mt-7 w-full"
          >
            {data.login.loginTitle}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ConfirmCode;
