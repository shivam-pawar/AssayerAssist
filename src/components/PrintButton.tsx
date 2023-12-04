import React, { PureComponent } from "react";
import ReactToPrint from "react-to-print";
import PrintPreview from "./PrintPreview";
import Loader from "./Loader";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { connect } from "react-redux";
import { customerDetailsType } from "../interfaces/customerDetails";
import { sampleDetailsType } from "../interfaces/sampleDetails";
import { capitalizeFirstLetter } from "../utils/helperMethods";

interface PrintButtonState {
  isLoading: boolean;
}

class PrintButton extends PureComponent<
  { customerDetails: customerDetailsType; sampleDetails: sampleDetailsType },
  PrintButtonState
> {
  private componentRef: any = React.createRef();
  constructor(props: {
    customerDetails: customerDetailsType;
    sampleDetails: sampleDetailsType;
  }) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  handleAfterPrint = async () => {
    console.log(
      "`onAfterPrint` called: ",
      this.props?.customerDetails,
      this.props?.sampleDetails
    );
    const {
      recordDate,
      weight,
      sampleName,
      serialNumber,
      sampleType,
      customerName,
    } = this.props.customerDetails;
    const { gold, silver } = this.props.sampleDetails;
    if (customerName) {
      await addDoc(collection(db, "records"), {
        recordDate: recordDate,
        gold: gold,
        weight: weight,
        sampleName: sampleName,
        serialNumber: serialNumber,
        sampleType: sampleType,
        customerName: capitalizeFirstLetter(customerName),
        silver: silver,
      });
    }
  };

  handleOnBeforeGetContent = () => {
    this.setState({ isLoading: true });

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.setState({ isLoading: false }, resolve);
      }, 2000);
    });
  };

  setComponentRef = (ref: any | null) => {
    if (ref) {
      this.componentRef.current = ref;
    }
  };

  reactToPrintContent = () => {
    return this.componentRef.current;
  };

  reactToPrintTrigger = () => {
    return (
      <button className="hover:scale-105 m-2 ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <img width="40" height="40" src="/assets/print.png" alt="print" />
      </button>
    );
  };

  render() {
    return (
      <div>
        <ReactToPrint
          content={this.reactToPrintContent}
          documentTitle="AwesomeFileName"
          onAfterPrint={this.handleAfterPrint}
          onBeforeGetContent={this.handleOnBeforeGetContent}
          removeAfterPrint
          trigger={this.reactToPrintTrigger}
        />
        {this.state.isLoading && <Loader />}
        <div className="hidden">
          <PrintPreview ref={this.setComponentRef} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    customerDetails: state.customerDetails,
    sampleDetails: state.sampleDetails,
  };
}
export default connect(mapStateToProps)(PrintButton);
