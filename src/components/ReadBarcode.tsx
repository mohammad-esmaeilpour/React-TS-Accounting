import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from 'src/react-query/services/apiClient';

const ReadBarcode: React.FC = () => {
  const [barcode, setBarcode] = useState<string>(''); // Track the barcode value
  const [barcodeComplete, setBarcodeComplete] = useState<boolean>(false); // Track if barcode is complete
  const [productData, setProductData] = useState<any>(null); // State to store product data from API
  const barcodeInputRef = useRef<HTMLInputElement | null>(null); // Ref for input element
  const outputDivRef = useRef<HTMLDivElement | null>(null); // Ref for output div
  let timeout: NodeJS.Timeout;
  const params = useParams();

  // Function to handle the API call
  const fetchProductByBarcode = async (scannedBarcode: string) => {
    try {
      // Replace with your actual API endpoint, and ensure :bid is handled appropriately.
      const response = await axiosInstance.get(
        `/product/barcode/${params.bid}?barcode=${scannedBarcode}`
      );
      
      setProductData(response.data.product); // Save product data
      console.log('Product data:', response.data); // Log the product data (can be shown on UI)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.length === 1) {
        setBarcode((prevBarcode) => prevBarcode + event.key); // Append key to barcode
      }

      // If Enter key is pressed, barcode is complete
      if (event.key === 'Enter') {
        if (outputDivRef.current) {
          outputDivRef.current.textContent = `Scanned Barcode: ${barcode}`; // Display the barcode
        }
        fetchProductByBarcode(barcode); // Call API with scanned barcode
        setBarcode(''); // Reset barcode for the next scan
        setBarcodeComplete(true);
      }

      // Reset barcode after timeout of 500ms without input
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setBarcode(''); // Reset if no new input after 500ms
        setBarcodeComplete(false);
      }, 500);
    };

    // Attach the event listener when component mounts
    document.addEventListener('keypress', handleKeyPress);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      clearTimeout(timeout);
    };
  }, [barcode]);

  return (
    <div>
      <input ref={barcodeInputRef} id="barcodeInput" type="text" placeholder="Scan barcode here" />
      <div ref={outputDivRef} id="output">
        {barcodeComplete ? `Scanned Barcode: ${barcode}` : 'Awaiting scan...'}
      </div>

      {/* Render the product data */}
      {productData && (
        <div>
          <h3>Product Information</h3>
          <p>ID: {productData.barcode}</p>
          <p>Name: {productData.name}</p>
          <p>Price: {productData.price}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default ReadBarcode;
