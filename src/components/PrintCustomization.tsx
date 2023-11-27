import React, { useState, useEffect, ChangeEvent } from "react";
import { TextConfig } from "../interfaces/printSettings";
import { TextElementComponent } from "./TextElementComponent";
import { customerDetailsType } from "../interfaces/customerDetails";
import { useSelector } from "react-redux";
import SampleDetailsTable from "./SampleDetailsTable";
import { sampleDetailsType } from "../interfaces/sampleDetails";
import moment from "moment";

const PrintCustomization: React.FC = () => {
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  const sampleDetails: sampleDetailsType = useSelector(
    (state: any) => state.sampleDetails
  );

  // Dynamic content separate from settings
  const dynamicContent: { [key: number]: any } = {
    1: "Name: " + customerDetails.customerName,
    2: "Date: " + moment(Date().toLocaleString()).format("Do MMMM YYYY"),
    3: "Sample: " + customerDetails.sampleName,
    4: "SR. No. " + customerDetails.serialNumber.toString(),
    5: "Weight: " + customerDetails.weight.toString() + " gram",
    6: <SampleDetailsTable data={sampleDetails} />,
    7: "Time: " + moment(Date().toLocaleString()).format("hh:mm:ss a"),
    8:
      customerDetails.sampleType === "gold"
        ? "Gold: " + sampleDetails.gold
        : "Silver: " + sampleDetails.silver,
    9: customerDetails.sampleType === "gold" && "Karat: " + sampleDetails.karat,
  };

  const [textElements, setTextElements] = useState<TextConfig[]>([
    {
      id: 1,
      content: "",
      x: 144,
      y: 50,
      fontSize: 18,
      bold: false,
    },
    {
      id: 2,
      content: "",
      x: 20,
      y: 100,
      fontSize: 18,
      bold: false,
    },
    {
      id: 3,
      content: "",
      x: 340,
      y: 50,
      fontSize: 18,
      bold: false,
    },
    {
      id: 4,
      content: "",
      x: 20,
      y: 50,
      fontSize: 18,
      bold: false,
    },
    {
      id: 5,
      content: "",
      x: 500,
      y: 50,
      fontSize: 18,
      bold: false,
    },
    {
      id: 6,
      content: "",
      x: 80,
      y: 200,
      fontSize: 16,
      bold: false,
    },
    {
      id: 7,
      content: "",
      x: 500,
      y: 100,
      fontSize: 18,
      bold: false,
    },
    {
      id: 8,
      content: "",
      x: 20,
      y: 150,
      fontSize: 24,
      bold: true,
    },
    {
      id: 9,
      content: "",
      x: 340,
      y: 150,
      fontSize: 24,
      bold: true,
    },
    {
      id: 10,
      content: "",
      x: 180,
      y: 150,
      fontSize: 24,
      bold: true,
    },
  ]);

  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);

  useEffect(() => {
    const savedTextElementsString = localStorage.getItem("textElements");
    if (savedTextElementsString) {
      const savedTextElements = JSON.parse(savedTextElementsString);
      setTextElements(savedTextElements);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textElements", JSON.stringify(textElements));
  }, [textElements]);

  const handleTextDoubleClick = (textId: number) => {
    setSelectedTextId(textId);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    property: keyof TextConfig
  ) => {
    const updatedTextElements = textElements.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            [property]:
              property === "bold"
                ? e.target.checked
                : parseInt(e.target.value, 10),
          }
        : text
    );
    setTextElements(updatedTextElements);
  };

  const renderTextElements = () => {
    return textElements.map((text) => (
      <TextElementComponent
        key={text.id}
        textConfig={{
          ...text,
          content: dynamicContent[text.id] || "",
        }}
        onDoubleClick={handleTextDoubleClick}
      />
    ));
  };

  return (
    <div className="relative" style={{ width: "100%", height: "100%" }}>
      {renderTextElements()}
      {selectedTextId && (
        <div className="fixed w-[100%] top-0 right-0 bottom-0 left-[-10] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded absolute right-1">
            <label className="block mb-2" htmlFor="xPosition">
              X Position:
            </label>
            <input
              className="w-full border p-2 mb-2"
              type="number"
              id="xPosition"
              value={
                textElements.find((text) => text.id === selectedTextId)?.x || ""
              }
              onChange={(e) => handleInputChange(e, "x")}
            />

            <label className="block mb-2" htmlFor="yPosition">
              Y Position:
            </label>
            <input
              className="w-full border p-2 mb-2"
              type="number"
              id="yPosition"
              value={
                textElements.find((text) => text.id === selectedTextId)?.y || ""
              }
              onChange={(e) => handleInputChange(e, "y")}
            />
            <label className="block mb-2" htmlFor="fontSize">
              Font Size:
            </label>
            <input
              className="w-full border p-2 mb-2"
              type="number"
              id="fontSize"
              value={
                textElements.find((text) => text.id === selectedTextId)
                  ?.fontSize || ""
              }
              onChange={(e) => handleInputChange(e, "fontSize")}
            />
            <div className="flex justify-center items-center my-2">
              <label className="block my-auto mr-1" htmlFor="bold">
                Bold:
              </label>
              <input
                className="mr-2 w-5 h-5"
                type="checkbox"
                id="bold"
                checked={
                  textElements.find((text) => text.id === selectedTextId)
                    ?.bold || false
                }
                onChange={(e) => handleInputChange(e, "bold")}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSelectedTextId(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintCustomization;
