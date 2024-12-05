import DynamicService from "src/service/DynamicService";
import GalleryVector from "../icons/vectors/GalleryVector";
import { useParams } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import CloseCircleIcon from "../icons/CloseCircleIcon";
import { DataProps } from "src/data/fa";
import { useAppSelector } from "src/store/store";

type Props = {
  title: string;
  kind: string;
  onFileUpload: (filePath: string | null) => void; // Update to allow null
  initialImage?: string | null;
};

const FileUpload = ({
  title,
  kind,
  onFileUpload,
  initialImage,
}: Props) => {
  const params = useParams();
  const [image, setImage] = useState<string | null | undefined>(initialImage);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input
  const { register } = useForm();
  const data: DataProps = useAppSelector((state) => state.dataReducer);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLoading(true);
      const selectedFile = e.target.files[0];
      DynamicService({
        method: "post",
        service: `file/${params.bid}`,
        file: selectedFile,
        params: { kind },
      })
        .then((response: any) => {
          if (response.status === 200) {
            setLoading(false);
            const filePath = response.data.filePath;
            setImage(filePath);
            onFileUpload(filePath); // Pass the file path back to the parent

            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  };

  const handleRemoveFile = () => {
    if (!image) return;

    setImage(null);
    setLoading(false);
    onFileUpload(null);

    // DynamicService({
    //   method: "delete",
    //   service: `file/${params.bid}`,
    //   params: { src: image },
    // })
    //   .then((response: any) => {
    //     if (response.status === 200) {
    //       setImage(null);
    //       setLoading(false);
    //       onFileUpload(null);

    //       if (fileInputRef.current) {
    //         fileInputRef.current.value = "";
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Failed to remove file:", error);
    //     setLoading(false);
    //   });
  };

  return (
    <Fragment>
      <div className="w-48 h-40 flex flex-col items-center justify-center rounded-xl input-instance p-0 m-0 relative overflow-hidden">
        {image ? (
          <img
            className="w-full h-full object-contain object-center"
            src={`https://capital-compass-server.liara.run/${image}`}
          />
        ) : loading ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          <Fragment>
            <GalleryVector />
            <div className="mt-2 text-xs family-regular">{title}</div>
          </Fragment>
        )}
        <input
          {...register("image_src")}
          ref={fileInputRef} // Assign the ref to the input
          autoComplete="off"
          onChange={handleFileChange}
          type="file"
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      {image && (
        <div
          onClick={handleRemoveFile}
          className="c-red text-xs flex items-center justify-center gap-2 my-2 cursor-pointer"
        >
          {data.word.removeFile}
          <CloseCircleIcon size={16} color="red" />
        </div>
      )}
    </Fragment>
  );
};

export default FileUpload;
