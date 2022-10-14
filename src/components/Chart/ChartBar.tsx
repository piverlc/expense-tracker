import * as React from "react";
import "./ChartBar.css";

type ChartBarProps = {
  maxValue: number;
  value: number;
  label: string;
};

const ChartBar = ({ maxValue, label, value }: ChartBarProps) => {
  let barFilled = "0%";

  if (maxValue > 0) {
    barFilled = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <React.Fragment>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFilled }}></div>
        </div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </React.Fragment>
  );
};

export default ChartBar;
