import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import getApi from "src/react-query/services/getApi";
import { updateFactorProducts } from "src/store/slice/factorProducts-slice";
import { TProduct } from "src/types/Product.types";

const ReadProductByBarcode = () => {
  const [barcode, setBarcode] = useState<string | null>(null);
  const params = useParams();
  const dispatch = useDispatch();

  const { data: productByBarcode } = getApi<TProduct>({
    queryKey: ["productWithBarcode"],
    service: `product/barcode/${params.bid}`,
    serviceKey: "product",
    params: {
      barcode,
    },
    enable: barcode ? true : false,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBarcodeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputRef.current && setBarcode(inputRef.current.value);
  };

  useEffect(() => {
    if (productByBarcode) {
      dispatch(updateFactorProducts(productByBarcode));
    }
  }, [productByBarcode]);

  return (
    <div className="flex gap-2.5 mb-10">
      <input
        onInput={handleBarcodeSearch}
        ref={inputRef}
        placeholder="scan barcode here"
      />
    </div>
  );
};

export default ReadProductByBarcode;
