import { useDispatch, useSelector } from "react-redux";
import { updateSampleDetails } from "../slices/sampleDetails";
import { sampleDetailsType } from "../interfaces/sampleDetails";
import { capitalizeFirstLetter } from "../utils/helperMethods";

const InputSampleDetails = () => {
  const sampleDetails = useSelector((state: any) => state.sampleDetails);
  const dispatch = useDispatch();
  const handleChange =
    (fieldName: keyof sampleDetailsType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch(
        updateSampleDetails({
          ...sampleDetails,
          [fieldName]: value,
        })
      );
    };
  return (
    <div className="flex w-[100%] justify-start items-start flex-wrap">
      {Object.keys(sampleDetails).map((fieldName: any) => (
        <form key={fieldName} className="max-w-sm mx-auto m-3 p-1">
          <label className="block mb-1 text-md text-white dark:text-black">
            {capitalizeFirstLetter(fieldName)}
          </label>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
            placeholder={capitalizeFirstLetter(fieldName)}
            value={sampleDetails[fieldName]}
            onChange={handleChange(fieldName)}
            required
            disabled={fieldName === "karat" || fieldName === "copper"}
          />
        </form>
      ))}
    </div>
  );
};

export default InputSampleDetails;
