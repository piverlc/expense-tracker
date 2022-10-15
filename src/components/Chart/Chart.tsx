import { FC, Fragment } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

type ChartProps = {
  dataPoints: {
    label: string;
    value: number;
  }[];
};

const Chart: FC<ChartProps> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  return (
    <Fragment>
      <div className="chart">
        {dataPoints.map((dataPoint) => (
          <ChartBar
            maxValue={maximumValue}
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Chart;
