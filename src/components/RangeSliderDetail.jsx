import React, { useState } from "react";
import { Range } from "react-range";

const RangeSliderDetail = () => {
  const [values, setValues] = useState([20, 80]);
  console.log(values);

  return (
    <div className="p-2">
      <div className="">
        <Range
          values={values}
          step={1}
          min={0}
          max={100}
          onChange={(newValues) => {
            setValues(newValues);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "2px",
                display: "flex",
                width: "100%",
                backgroundColor: "#6C757D",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                backgroundColor: "#6C757D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.16)",
                borderRadius: "50%",
              }}
            >
              <div
                style={{
                  height: "6px",
                  width: "6px",
                  borderRadius: "50%",
                  // backgroundColor: index === 0 ? '#FC4A1A' : index === 1 ? '#F7B733' : '#00A896',
                }}
              />
            </div>
          )}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p>17.99$</p>
        <p>19.99$</p>
      </div>
    </div>
  );
};

export default RangeSliderDetail;
