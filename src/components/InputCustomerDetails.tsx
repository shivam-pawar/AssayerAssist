import TextField from "@mui/material/TextField";
import SampleTypeSelector from "./SampleTypeSelector";

const InputCustomerDetails = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <TextField type="number" label="Serial Number" variant="standard" />
      <TextField
        style={{ width: "30vmax" }}
        type="text"
        label="Customer Name"
        variant="standard"
      />
      <TextField type="text" label="Sample Name" variant="standard" />
      <TextField type="number" label="Weight" variant="standard" />
      <TextField type="text" label="Date" variant="standard" />
      <div>
        <SampleTypeSelector />
      </div>
    </div>
  );
};

export default InputCustomerDetails;
