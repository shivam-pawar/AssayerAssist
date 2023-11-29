import React, { PureComponent } from "react";
import ReactToPrint from "react-to-print";
import PrintPreview from "./PrintPreview";
import Loader from "./Loader";

interface PrintButtonState {
  isLoading: boolean;
}

class PrintButton extends PureComponent<{}, PrintButtonState> {
  private componentRef: any = React.createRef();

  constructor(props: {}) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  handleAfterPrint = () => {
    console.log("`onAfterPrint` called");
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
      <button className="m-2 ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/40/EBEBEB/print.png"
          alt="print"
        />
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

export default PrintButton;
