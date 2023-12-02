import { DataTableType } from "../interfaces/DataTableType";
import QuickView from "./QuickView";

const DataTable = ({ data }: any) => {
  const columns = [
    {
      name: "SR Number",
      selector: (row: DataTableType) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row: DataTableType) => row.customerName,
      sortable: true,
    },
    {
      name: "Sample Name",
      selector: (row: DataTableType) => row.sampleName,
      sortable: true,
      style: {
        textAlign: "center",
        alignSelf: "center",
      },
    },
    {
      name: "Sample Type",
      selector: (row: DataTableType) => row.sampleType,
      sortable: true,
    },
    {
      name: "Weight (gram)",
      selector: (row: DataTableType) => row.weight,
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
  return (
    <div className="overflow-x-auto">
      <QuickView data={data} columns={columns} />
    </div>
  );
};

export default DataTable;
