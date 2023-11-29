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
        alert(
          "Data from the uploaded file has been saved to localStorage. Please refresh the page."
        );
      } catch (error) {
        alert("Error: Invalid JSON file. Please upload a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        Upload file
      </label>
      <input
        className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadPrintSettings;
