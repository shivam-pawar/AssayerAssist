import { collection, onSnapshot, query, where } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import Loader from "./Loader";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import QuickView from "./QuickView";
import { DataTableType } from "../interfaces/DataTableType";
const columns = [
  {
    id: "1",
    name: "SR. No.",
    selector: (row: DataTableType) => row.serialNumber,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: DataTableType) => row.customerName,
    sortable: true,
  },
  {
    name: "Gold (%)",
    selector: (row: DataTableType) => row.gold,
    sortable: true,
  },
  {
    name: "Silver (%)",
    selector: (row: DataTableType) => row.silver,
    sortable: true,
  },
];

function Dashboard() {
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const recordsRef = collection(db, "records");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setShowLoader(true);
    try {
      const q = query(
        recordsRef,
        where("recordDate", ">", moment().toISOString().split("T")[0])
      );

      onSnapshot(q, (snapshot: any) => {
        setData(
          snapshot.docs.map((doc: any) => ({
            ...doc.data(),
          }))
        );
        setShowLoader(false);
      });
    } catch (error) {
      setShowLoader(false);
    }
  };
  console.log(data);
  if (showLoader) return <Loader />;

  return (
    <div className="flex flex-row md:flex-col w-full">
      {data.length > 0 && (
        <div className="flex flex-col md:py-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-screen md:w-8/12">
              <PieChart data={data} />
            </div>
            <div className="flex w-screen">
              <LineChart data={data} />
            </div>
          </div>
          <div className="w-screen md:w-full px-4 py-8 md:mt-20">
            <QuickView data={data} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
