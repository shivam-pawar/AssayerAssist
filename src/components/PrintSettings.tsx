import React from "react";
import DownloadData from "./DownloadData";
import UploadPrintSettings from "./UploadPrintSettings";
import PrintPreview from "./PrintPreview";

const PrintSettings: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-[210mm] bg-white shadow-md h-[200mm] overflow-auto">
        <div className="overflow-auto h-full">
          <PrintPreview />
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
