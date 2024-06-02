import "@fontsource/roboto/300.css";
import NavBar from "@/components/NavBar";
import DashboardCard from "@/components/DashboardCard";
import { Container, Box, Grid } from "@mui/material";
import ApplicationDataTable from "@/components/ApplicationDataTable";
import { dashboardData } from "@/dashboard-data";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function Home() {
  const { applications, responses, interviews } = dashboardData;
  const cardsData = [
    { title: "Applications", data: applications, icon: <WorkOutlineIcon /> },
    { title: "Responses", data: responses, icon: <MailOutlineIcon /> },
    { title: "Interviews", data: interviews, icon: <PeopleOutlineIcon /> },
  ];
  const chart1Data = [
    { id: 0, value: applications.total, label: "Applications" },
    { id: 1, value: responses.total, label: "Responses" },
    { id: 2, value: interviews.total, label: "Interviews" },
  ];
  const chart2Data = [];

  return (
    <>
      <Container sx={{ maxWidth: 1024 }} style={{ paddingRight: 0 }}>
        <Grid container spacing={3} style={{ marginTop: 0 }}>
          <Grid item xs={12} style={{ padding: 0 }}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Container sx={{ width: 960 }} style={{ padding: 0 }}>
              <Grid container spacing={2}>
                {cardsData.map((card, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <DashboardCard
                      icon={card.icon}
                      title={`${card.title} `}
                      description={`${card.data.total} `}
                      subDescription={`+${card.data.last_month} this month`}
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid item xs={12} style={{ marginTop: "2rem" }}>
                {/* <PieDataChart /> */}
              </Grid>

              <Grid item xs={12} style={{ marginTop: "2rem" }}>
                <ApplicationDataTable data={dashboardData} />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
