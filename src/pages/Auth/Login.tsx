import { useForm, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import DynamicService from "../../service/DynamicService";
import { useAppSelector } from "../../store/store";
import AuthLayout from "./AuthLayout";
import { updateUser } from "src/store/slice/user-slice";
import { DataProps } from "src/data/fa";
import EyeIcon from "src/components/icons/EyeIcon";
import { useRef } from "react";

const Login = () => {
  // hook's
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: DataProps = useAppSelector((state) => state.dataReducer);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  // hook form
  const { handleSubmit, register } = useForm();

  // services
  const onSubmit = (datas: FieldValues) => {
    DynamicService({
      method: "post",
      service: "user/login",
      payload: datas,
    }).then((response:any) => {
      if (response.status === 200) {
        dispatch(updateUser({ ...response.data }));
        navigate(`/confirm-code`);
      }
    });
  };

  return (
    <AuthLayout>
      <div className="card">
        <h1 className="mb-6 card-title">{data.login.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* inputs */}
          <div>
            {data.login.inputs.map((item) => (
              <div ref={passwordRef} key={item.key} className="relative mb-3">
                <input autoComplete="off"
                  {...register(item.key, { required: true })}
                  id={item.key}
                  type={
                    item.key === "password"
                      ? "password"
                      : item.key === "email"
                      ? "emai"
                      : "text"
                  }
                  placeholder={item.placeholder}
                  className={`${item.key === "password" && "pe-10"}`}
                />
                {item.key === "password" && (
                  <div
                    onClick={() =>
                      passwordRef.current?.firstElementChild?.setAttribute(
                        "type",
                        passwordRef.current?.firstElementChild.getAttribute(
                          "type"
                        ) === "password"
                          ? "text"
                          : "password"
                      )
                    }
                    className="absolute end-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <EyeIcon size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* captcha */}
          {/* <div className="flex gap-2 mt-6">
            <input autoComplete="off"
              id={data.login.captcha}
              type="text"
              placeholder={data.login.captcha}
            />

            <div className="input-instance flex items-center justify-between">
              <div className="relative cursor-pointer">
                <CaptchaIcon size={18} />
              </div>
              <div className="relative tracking-widest font-bold">21345</div>
            </div>
          </div> */}

          {/* login button */}
          <button type="submit" className="btn-primary mt-7 w-full">
            {data.login.loginTitle}
          </button>
        </form>
        <div className="flex gap-2 mt-4">
          {data.login.options.map((item) => (
            <NavLink
              key={item.title}
              to={`/register`}
              className="btn-small flex-1"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
