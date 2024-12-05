import ChevronDown from "../icons/ChevronDown";
import { Link, useParams } from "react-router-dom";

type Props = {
  list: { title: string; key: string }[];
};

const DropdonwProduct = ({ list }: Props) => {

  const params = useParams();

  const handleClick = () => {
    const elem: any = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
  
  return (
    <div className="dropdown dropdown-bottom dropdown-end min-w-40">
      <div className="relative">
        <input
          autoComplete="off"
          type="button"
          className="btn-primary text-start cursor-pointer text-[13px] !family-regular rounded-xl h-10"
          value={params.pt === "goods" ? list[1].title : list[0].title}
        />
        <div className="absolute end-3 top-1/2 -translate-y-1/2">
          <ChevronDown size={10} color="white" />
        </div>
      </div>
      <ul
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
      >
        {list.map((item) => (
          <li key={item.title}>
            <Link to={`/${params.bid}/products/${item.key}`} onClick={handleClick}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdonwProduct;
