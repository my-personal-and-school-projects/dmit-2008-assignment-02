import { LineChart } from "@mui/x-charts/LineChart";

/**
 * The function creates a line chart based on the MUI X Docs samples
 * @param {*} props
 * @returns A line chart displaying the applications info & status
 */
export default function LineDataChart(props) {
  return (
    <LineChart
      style={{ width: "100%" }}
      height={300}
      series={[
        { data: props.aData, label: "Responded" },
        { data: props.bData, label: "Rejected" },
        { data: props.cData, label: "Pending" },
      ]}
      xAxis={[{ scaleType: "point", data: props.xLabels }]}
    />
  );
}
