import { forwardRef } from "react";
import PrintCustomization from "./PrintCustomization";

const PrintPreview = forwardRef<HTMLDivElement, any>(
  //@ts-ignore
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-start justify-start text-center h-[297mm]"
      >
        <PrintCustomization settingName="textElements" />
        <PrintCustomization settingName="textElements-Copy" />
      </div>
    );
  }
);

export default PrintPreview;
