import SampleTypeSelector from "./SampleTypeSelector";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerDetails } from "../slices/customerDetails";
import InputSampleDetails from "./InputSampleDetails";
import { customerDetailsType } from "../interfaces/customerDetails";
import PrintButton from "./PrintButton";
import Autocomplete from "./Autocomplete";
import moment from "moment";

const InputCustomerDetails = () => {
  const dispatch = useDispatch();
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  const onChange = (e: any) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        [e.target.name]: e.target.value,
        recordDate: moment().toISOString(),
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
        <Autocomplete />
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
      <PrintButton />
      <InputSampleDetails />
    </div>
  );
};

export default InputCustomerDetails;
