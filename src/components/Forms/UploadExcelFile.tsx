import { useAppSelector } from "src/store/store";
import { ExcelIcon } from "../icons/ExcelIcon";
import DynamicService from "src/service/DynamicService";
import { useParams } from "react-router-dom";

const UploadExcelFile = () => {
  const params = useParams();
  const data = useAppSelector((state) => state.dataReducer);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      DynamicService({
        method: "post",
        service: `product/goods/excel/${params.bid}`,
        file: selectedFile,
      });
    }
  };

  return (
    <button className="btn btn-light-green relative">
      <input
        placeholder={data.products.excelButton}
        className="absolute opacity-0"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />
      <ExcelIcon />
      {data.products.excelButton}
    </button>
  );
};

export default UploadExcelFile;
