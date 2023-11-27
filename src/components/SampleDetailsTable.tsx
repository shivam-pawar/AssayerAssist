import React from "react";
import { sampleDetailsType } from "../interfaces/sampleDetails";
import { capitalizeFirstLetter } from "../utils/helperMethods";
import { customerDetailsType } from "../interfaces/customerDetails";
import { useSelector } from "react-redux";

const SampleDetailsTable: React.FC<{ data: sampleDetailsType }> = ({
  data,
}) => {
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  const elements = Object.keys(data);
  const excludedElements = [
    customerDetails.sampleType === "gold" ? "gold" : "silver",
    "karat",
  ];
  const filteredElements = elements.filter(
    (element) => !excludedElements.includes(element)
  );

  const columnLength = Math.ceil(filteredElements.length / 3);

  const firstColumnElements = filteredElements.slice(0, columnLength);
  const secondColumnElements = filteredElements.slice(
    columnLength,
    2 * columnLength
  );
  const thirdColumnElements = filteredElements.slice(2 * columnLength);

  return (
    <div className="overflow-x-auto">
      <div className="flex">
        <div className="w-1/3">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {firstColumnElements.map((element) => (
                <tr key={element}>
                  <td className="py-2 px-4 border-b">
                    {capitalizeFirstLetter(element)}
                  </td>
                  <td className="py-2 px-8 border-b">{data[element]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/3">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {secondColumnElements.map((element) => (
                <tr key={element}>
                  <td className="py-2 px-4 border-b">
                    {capitalizeFirstLetter(element)}
                  </td>
                  <td className="py-2 px-8 border-b">{data[element]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/3">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {thirdColumnElements.map((element) => (
                <tr key={element}>
                  <td className="py-2 px-4 border-b">
                    {capitalizeFirstLetter(element)}
                  </td>
                  <td className="py-2 px-4 border-b">{data[element]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SampleDetailsTable;
