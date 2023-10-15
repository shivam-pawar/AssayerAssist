import { Input } from "@mui/material";

const UploadPrintSettings = () => {
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        for (const key in jsonData) {
          localStorage.setItem(key, jsonData[key]);
        }
        alert("Data from the uploaded file has been saved to localStorage.");
      } catch (error) {
        console.error("Error parsing JSON file:", error);
        alert("Error: Invalid JSON file. Please upload a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileUpload} /> */}
      <Input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadPrintSettings;
