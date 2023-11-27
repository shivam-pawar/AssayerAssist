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

  const clearSettings = () => {
    window.confirm(
      "It will clear all the print layout setting. Are you sure?"
    ) && localStorage.clear();
  };

  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={downloadData}
      >
        Backup Layout
      </button>
      <button
        type="button"
        className="text-white ml-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        onClick={clearSettings}
      >
        Clear Settings
      </button>
    </div>
  );
};

export default DownloadData;
