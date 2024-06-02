import { Box, Container } from "@mui/material";
import { PieChart } from "@mui/x-charts";

import { dashboardData } from "@/dashboard-data";
import { Label } from "@mui/icons-material";

/* const { applications, responses, interviews } = dashboardData;
const data = [
  { id: 0, value: applications.total, label: "Applications" },
  { id: 1, value: responses.total, label: "Responses" },
  { id: 2, value: interviews.total, label: "Interviews" },
]; */

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
