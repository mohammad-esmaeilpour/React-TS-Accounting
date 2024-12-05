import { useForm, FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import DynamicService from "src/service/DynamicService";
import { useAppSelector } from "src/store/store";
import AuthLayout from "./AuthLayout";
import { useDispatch } from "react-redux";
import { updateUser } from "src/store/slice/user-slice";
import { DataProps } from "src/data/fa";
import EyeIcon from "src/components/icons/EyeIcon";
import { createRef, useRef} from "react";

const Register = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  // hook form
  const { handleSubmit, register } = useForm();

  const passwordRef = useRef(
    data.register.inputs.map(() => createRef<HTMLInputElement>())
  );

  const handleToggle = (index: number) => {
    const currentInput = passwordRef.current[index].current?.firstElementChild;
    if (currentInput) {
      currentInput.setAttribute(
        "type",
        currentInput.getAttribute("type") === "password" ? "text" : "password"
      );
    }
  };

  // services
  const onSubmit = (datas: FieldValues) => {
    DynamicService({
      method: "post",
      service: "user/register",
      payload: datas,
    }).then((response: any) => {
      console.log(response,'register');
      
      if (response.status === 201) {
        dispatch(updateUser({ ...response.data, ...datas }));
        navigate(`/confirm-code`);
      }
    });
  };

  return (
    <AuthLayout>
      <div className="card">
        <h1 className="mb-6 card-title">{data.register.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`grid grid-cols-2 w-full gap-x-2`}>
            {data.register.inputs.map((item, index) => (
              <div
                key={item.key}
                ref={passwordRef.current[index]}
                className={`${
                  item.gridColumn && item.gridColumn
                } relative mb-3`}
              >
                <input autoComplete="off"
                  {...register(item.key, { required: true })}
                  id={item.key}
                  type={
                    item.key.includes("password")
                      ? "password"
                      : item.key === "email"
                      ? "emai"
                      : "text"
                  }
                  placeholder={item.placeholder}
                  className={`${item.key.includes("password") && "pe-10"}`}
                />
                {item.key.includes("password") && (
                  <div
                    onClick={() => {
                      handleToggle(index);
                    }}
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

          {/* register button */}
          <button className="btn-primary w-full h-12 mt-7">
            {data.register.registerTitle}
          </button>
        </form>
        <div className="flex justify-center items-center gap-2 mt-3">
          <div className="text-xs family-regular">
            {data.register.option.title}
          </div>
          <NavLink className="text-xs family-bold" to={`/login`}>
            {data.login.title}
          </NavLink>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
