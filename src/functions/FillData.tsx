import { TInputs } from "src/types/global.types";

type Props = {
  inputs: TInputs[];
  response: unknown;
  setValue: (
    name: string,
    value: any,
    options?:
      | Partial<{
          shouldValidate: boolean;
          shouldDirty: boolean;
          shouldTouch: boolean;
        }>
      | undefined
  ) => void;
};

const FillData = ({ inputs, response, setValue }: Props) => {
  inputs.map((item) => {
    let some = Object.entries(response!).filter((val) => val[0] === item.key);
    some.map((item) => {
      setValue(item[0], item[1]);
    });
  });
};

export default FillData;
