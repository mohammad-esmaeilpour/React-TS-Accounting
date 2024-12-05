import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface ExcelData {
  [key: string]: any;
}

const ExcelUploader: React.FC = () => {
  const [data, setData] = useState<ExcelData[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      if (typeof binaryStr !== 'string') return;

      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: ExcelData[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <h2>Excel File Uploader</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div style={{ marginTop: '20px' }}>
        {data.length > 0 && (
          <table>
            <thead>
              <tr>
                {data[0].map((cell: string, index: number) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExcelUploader;
