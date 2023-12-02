import React from "react";
import { DataTableType } from "../interfaces/DataTableType";
import DataTable from "react-data-table-component";
import { capitalizeFirstLetter } from "../utils/helperMethods";

const QuickView: React.FC<{ data: DataTableType[]; columns: any[] }> = ({
  data,
  columns,
}) => {
  const capitalizedData = data.map((item) => ({
    ...item,
    sampleType: capitalizeFirstLetter(item.sampleType),
    sampleName: capitalizeFirstLetter(item.sampleName),
    serialNumber: Number(item.serialNumber),
  }));
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#3498db",
        textAlign: "center",
        display: "flex",
        borderRadius: "5px",
      },
    },
    headCells: {
      style: {
        color: "#ffffff",
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        textAlign: "center",
        fontSize: "16px",
      },
    },
    cells: {
      style: {
        display: "flex",
        margin: "10px",
        textAlign: "center",
      },
    },
  };
  const defaultSortField = "serialNumber"; // Specify the column to sort by default
  return (
    <div>
      <DataTable
        columns={columns}
        data={capitalizedData}
        //@ts-ignore
        customStyles={customStyles}
        pagination
        paginationRowsPerPageOptions={[10, 20, 80, 100]}
        paginationPerPage={10}
        fixedHeader
        fixedHeaderScrollHeight="100%"
        defaultSortAsc={false}
        defaultSortField={defaultSortField}
        defaultSortFieldId={1}
      />
    </div>
  );
};

export default QuickView;
