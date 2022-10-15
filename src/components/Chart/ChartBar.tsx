import { FC, Fragment } from "react";
import "./ChartBar.css";

type ChartBarProps = {
  maxValue: number;
  value: number;
  label: string;
};

const ChartBar: FC<ChartBarProps> = ({ maxValue, label, value }) => {
  let barFilled = "0%";

  if (maxValue > 0) {
    barFilled = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <Fragment>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFilled }}></div>
        </div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </Fragment>
  );
};

export default ChartBar;
