import React from "react";
import { useDispatch } from "react-redux";
import { updateCustomerDetails } from "../slices/customerDetails";

const SampleTypeSelector = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("gold"); // Set initial value to "gold"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(
      updateCustomerDetails({
        sampleType: event.target.value,
      })
    );
  };

  return (
    <div className="p-2">
      <div className="flex items-center ps-4 border rounded border-gray-600">
        <input
          onChange={(e) => handleChange(e)}
          id="gold-1"
          type="radio"
          value="gold"
          name="sampleType"
          checked={value === "gold"}
          className="outline-none border-none focus:outline-none w-16 h-16 text-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="w-full py-4 ms-2 pr-2 text-sm font-medium dark:text-gray-900 text-gray-300">
          Gold
        </label>

        <input
          onChange={(e) => handleChange(e)}
          id="silver-2"
          type="radio"
          value="silver"
          name="sampleType"
          checked={value === "silver"}
          className="outline-none border-none focus:outline-none w-16 h-16 text-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-900 text-gray-300">
          Silver
        </label>
      </div>
    </div>
  );
};

export default SampleTypeSelector;
