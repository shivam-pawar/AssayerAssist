import React from "react";
import PrintCustomization from "./PrintCustomization";
import DownloadData from "./DownloadData";
import UploadPrintSettings from "./UploadPrintSettings";
import { useSelector } from "react-redux";
import { customerDetailsType } from "../interfaces/customerDetails";

const PrintSettings: React.FC = () => {
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  console.log(customerDetails);
  const a4PageStyle: React.CSSProperties = {
    width: "210mm",
    height: "297mm",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(92,92,92)",
    padding: "20px",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
  };

  const printSettings: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  };

  const h1Style: React.CSSProperties = {
    fontSize: "24px",
  };

  const parent: React.CSSProperties = {
    display: "flex",
    flex: 1,
  };

  return (
    <div style={parent}>
      <div style={a4PageStyle}>
        <div style={contentStyle}>
          <h1 style={h1Style}>A4 Page Layout</h1>
        </div>
      </div>
      <div style={printSettings}>
        <PrintCustomization />
        <UploadPrintSettings />
        <DownloadData />
      </div>
    </div>
  );
};

export default PrintSettings;
