import React from 'react';
import * as XLSX from "xlsx";

const ExportToExcel = ({ tableData, filename, sheetName }) => {
  
  const Result = []
  tableData.map((item)=>{
    const {_id,  __v, ...newObj} = item
    Result.push(newObj)
     
  })


  console.log('completed',tableData);
  console.log('Result', Result)
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(Result);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <button onClick={exportToExcel} class = 'border-2 rounded mb-2 p-2 bg-green-500 hover:bg-blue-500 border-gray-300 mr-2'>Export</button>
  );
};

export default ExportToExcel;