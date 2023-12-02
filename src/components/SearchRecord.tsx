import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import DataTable from "./DataTable";
import Loader from "./Loader";
import moment from "moment";

const SearchRecord = () => {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const recordsRef = collection(db, "records");
  useEffect(() => {
    setShowLoader(true);
    const q = query(
      recordsRef,
      where("recordDate", ">", moment().toISOString().split("T")[0])
    );
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      setData(
        snapshot.docs.map((doc: any) => ({
          ...doc.data(),
        }))
      );
      setShowLoader(false);
    });

    return () => unsubscribe();
  }, []);

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowLoader(true);
    const prefix = e.target.value;
    const startAfter = prefix + "\uf8ff";
    let q = query(
      recordsRef,
      where(e.target.name, ">=", prefix),
      where(e.target.name, "<", startAfter)
    );
    if (prefix.trim() == "") {
      console.log("here");
      q = query(
        recordsRef,
        where("recordDate", ">", moment().toISOString().split("T")[0])
      );
    }
    const querySnapshot: any = await getDocs(q);
    const newData = querySnapshot.docs.map((doc: any) => ({
      ...doc.data(),
    }));
    setData(newData);
    setShowLoader(false);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen md:w-full">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <input
          type="number"
          id="serialNumber"
          name="serialNumber"
          aria-describedby="helper-text-explanation"
          className="mr-4 my-4 dark:bg-gray-50 w-40 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="SR No."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(event)
          }
          required
        />
        <input
          type="text"
          id="customerName"
          name="customerName"
          aria-describedby="helper-text-explanation"
          className="dark:bg-gray-50 my-4 border dark:border-gray-300 dark:text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-400"
          placeholder="Customer Name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(event)
          }
          required
        />
        <div className="w-64 ml-4">
          <input
            type="date"
            name="recordDate"
            className="w-full ml-12 text-xl md:ml-0 p-2.5 my-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onSearch(event)
            }
          />
        </div>
      </div>
      <div className="mt-6 w-screen md:w-[100%] px-3">
        {showLoader ? <Loader /> : <DataTable data={data} />}
      </div>
    </div>
  );
};

export default SearchRecord;
