import Chart from "react-google-charts";

const LineChart = ({ data }: any) => {
  const options = {
    title: "Recorded Time",
    curveType: "function",
    hAxis: {
      title: "Time",
      format: "hh:mm:ss a",
    },
    vAxis: {
      title: "Number of Records",
    },
    legend: { position: "none" },
    series: {
      0: { pointSize: 8, pointShape: "circle", color: "#0f9d58" }, // Color for the first series (data points)
    },
  };
  return (
    <Chart
      chartType="LineChart"
      data={[
        ["Record Time", "Number of Records", { role: "style" }],
        ...data.map((record: any, index: number) => [
          new Date(record.recordDate),
          index + 1, // Start count from 1
          record.sampleType === "gold" ? "gold" : "silver",
        ]),
      ]}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default LineChart;
