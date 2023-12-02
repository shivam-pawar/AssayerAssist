// Autocomplete.js
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import { capitalizeFirstLetter } from "../utils/helperMethods";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerDetails } from "../slices/customerDetails";
import { customerDetailsType } from "../interfaces/customerDetails";

const Autocomplete = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const customerDetails: customerDetailsType = useSelector(
    (state: any) => state.customerDetails
  );
  useEffect(() => {
    console.log("searchTerm: ", searchTerm);
    const fetchSuggestions = async () => {
      const recordsRef = collection(db, "records");
      const prefix = capitalizeFirstLetter(searchTerm);
      const startAfter = prefix + "\uf8ff";
      const q = query(
        recordsRef,
        where("customerName", ">=", prefix),
        where("customerName", "<", startAfter)
      );

      const querySnapshot = await getDocs(q);
      const names = new Set();

      querySnapshot.forEach((doc) => {
        const customerName = doc.data().customerName;
        names.add(customerName);
      });
      //@ts-ignore
      setSuggestions(Array.from(names));
    };

    if (searchTerm.trim() !== "") {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        customerName: event.target.value,
      })
    );
  };

  const handleSuggestionClick = (suggestion: any) => {
    dispatch(
      updateCustomerDetails({
        ...customerDetails,
        customerName: suggestion,
      })
    );
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={customerDetails.customerName}
        onChange={handleInputChange}
        placeholder="Customer Name"
        className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
      />
      {suggestions.length > 0 && searchTerm.length > 0 && (
        <ul className="absolute z-10 mt-1 w-96 bg-white shadow-lg border rounded-md overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-slate-200 "
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
