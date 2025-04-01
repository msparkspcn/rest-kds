import React, { RefObject } from "react";
type Segment = {
    value: string;
    label: string;
    ref: RefObject<HTMLDivElement>;
};
type SegmentedControlProps = {
    name: string;
    segments: Segment[];
    callback: (value: string, index: number) => void;
    defaultIndex?: number;
    controlRef: RefObject<HTMLDivElement>;
};
declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
