import { Button } from "@mui/material";

const DownloadData = () => {
  const downloadData = () => {
    const localStorageData: any = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key: any = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageData[key] = value;
    }
    const jsonData = JSON.stringify(localStorageData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "localStorageData.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Button variant="contained" onClick={downloadData}>
        Backup Layout
      </Button>
    </div>
  );
};

export default DownloadData;
