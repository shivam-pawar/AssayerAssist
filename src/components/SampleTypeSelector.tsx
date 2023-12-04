import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerDetails } from "../slices/customerDetails";
import { customerDetailsType } from "../interfaces/customerDetails";

const SampleTypeSelector = () => {
  const dispatch = useDispatch();
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  const [value, setValue] = React.useState(customerDetails?.sampleType); // Set initial value to "gold"

  const handleChange = () => {
    console.log("Clicked");
    setValue(value === "gold" ? "silver" : "gold");
    dispatch(
      updateCustomerDetails({
        sampleType: customerDetails?.sampleType === "gold" ? "silver" : "gold",
      })
    );
  };

  return (
    <div className="p-2">
      <div className="flex items-center text-black">
        <button
          className="bg-[#475569] text-white px-4 py-1 rounded-lg transition-transform transform-gpu hover:scale-105 hover:bg-[#374251]"
          onClick={handleChange}
        >
          <img
            width="50"
            height="50"
            src={value === "gold" ? "/assets/gold.png" : "/assets/silver.png"}
            alt="silver-bars"
            className={`transform-gpu origin-center transition-transform ${
              value === "silver" ? "rotate-y-180 scale-x-[-1]" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SampleTypeSelector;
