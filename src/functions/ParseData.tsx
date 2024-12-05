type Props = {
  inputs: any;
  submitData: any;
};

export function parsedData({ inputs, submitData }: Props) {
  return inputs.reduce((acc: any, field: any) => {
    const value = submitData[field?.key];

    if (field.type === "boolean") {
      acc[field.key] = value === "true" || value === true ? true : false;
    } else if (value === undefined || value === "") {
      acc[field.key] = null;
    } else if (field.type === "number") {
      acc[field.key] = Number(value);
    }else if (field.type === "date") {
      acc[field.key] = new Date(value).toISOString();
    } else {
      acc[field.key] = value;
    }
    return acc;
  }, {});
}
