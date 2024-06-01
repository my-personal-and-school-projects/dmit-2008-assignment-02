import { Fragment } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, Box } from "@mui/material";

export default function DashboardCard(props) {
  const card = (
    <Fragment>
      <CardContent>
        <Box style={{ display: "flex", gap: 4, alignItems: "Center" }}>
          <Box>{props.icon}</Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2">{props.subDescription}</Typography>
      </CardContent>
    </Fragment>
  );
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
