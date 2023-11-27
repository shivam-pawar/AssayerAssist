import React from "react";
import PrintCustomization from "./PrintCustomization";
import DownloadData from "./DownloadData";
import UploadPrintSettings from "./UploadPrintSettings";

const PrintSettings: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-[210mm] bg-white shadow-md h-[200mm] overflow-auto">
        <div className="overflow-auto h-full">
          <div className="flex flex-col items-start justify-start text-center h-[297mm]">
            <PrintCustomization />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-3 m-3 justify-evenly">
        <div className="m-3">
          <UploadPrintSettings />
        </div>
        <div className="m-3">
          <DownloadData />
        </div>
      </div>
    </div>
  );
};

export default PrintSettings;
