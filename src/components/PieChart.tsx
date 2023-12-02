import Chart from "react-google-charts";
import { countRecords } from "../utils/helperMethods";

const PieChart = ({ data }: any) => {
  const options = {
    title: "Number of Gold and Silver Tunch",
    is3D: true,
    colors: ["gold", "silver"],
    titleTextStyle: {
      color: "black",
    },
    pieSliceTextStyle: {
      color: "black",
    },
    legend: { position: "bottom" },
  };
  const goldRecords = countRecords(data, "gold");
  const silverRecords = countRecords(data, "silver");
  return (
    <Chart
      chartType="PieChart"
      data={[
        ["Gold", "Silver"],
        ["Gold", Number(goldRecords)],
        ["Silver", Number(silverRecords)],
      ]}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default PieChart;
