import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { Label } from "@mui/icons-material";

/**
 * The function creates a pie chart based on the MUI X Docs samples
 * @param {*} data
 * @returns A pie chart displaying the applications info & status
 */
export default function PieDataChart({ data }) {
  if (!data) {
    <Box>
      <Label>No data to display</Label>
    </Box>;
  } else {
    return (
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    );
  }
}
