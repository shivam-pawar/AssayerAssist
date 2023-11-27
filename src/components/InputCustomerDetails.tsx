import SampleTypeSelector from "./SampleTypeSelector";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerDetails } from "../slices/customerDetails";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { enIN } from "date-fns/locale";
import { useState, useEffect } from "react";
import InputSampleDetails from "./InputSampleDetails";
import { customerDetailsType } from "../interfaces/customerDetails";

const InputCustomerDetails = () => {
  const dispatch = useDispatch();
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    updateDate();
  }, [date]);
  const updateDate = () => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        recordDate: String(date),
      })
    );
  };

  const onChange = (e: any) => {
    console.log(e.target.name + ": " + e.target.value);
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <div className="flex flex-wrap justify-center items-center">
      <form className="m-3 p-1">
        <input
          type="number"
          id="serialNumber"
          name="serialNumber"
          aria-describedby="helper-text-explanation"
          className="dark:bg-gray-50 w-40 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="SR No."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
          value={customerDetails.serialNumber}
          required
        />
      </form>

      <form className="m-3 p-1">
        <input
          type="text"
          id="customerName"
          name="customerName"
          aria-describedby="helper-text-explanation"
          className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="Customer Name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
          value={customerDetails.customerName}
          required
        />
      </form>
      <form className="m-3 p-1">
        <input
          type="text"
          id="sampleName"
          name="sampleName"
          aria-describedby="helper-text-explanation"
          className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="Sample Name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
          value={customerDetails.sampleName}
          required
        />
      </form>
      <form className="m-3 p-1">
        <input
          type="number"
          id="weight"
          name="weight"
          aria-describedby="helper-text-explanation"
          className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="Weight"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
          value={customerDetails.weight}
          required
        />
      </form>
      <SampleTypeSelector />
      {/* <form className="m-3 p-1">
        <div className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400">
          <DatePicker
            className="outline-none"
            date={date}
            //@ts-ignore
            onDateChange={setDate}
            locale={enIN}
          >
            {({ inputProps, focused }) => (
              <input
                className={"input" + (focused ? " -focused" : "")}
                {...inputProps}
              />
            )}
          </DatePicker>
        </div>
      </form> */}
      <InputSampleDetails />
    </div>
  );
};

export default InputCustomerDetails;
