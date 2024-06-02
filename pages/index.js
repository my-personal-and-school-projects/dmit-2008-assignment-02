import "@fontsource/roboto/300.css";
import NavBar from "@/components/NavBar";
import DashboardCard from "@/components/DashboardCard";
import { Container, Box, Grid } from "@mui/material";
import ApplicationDataTable from "@/components/ApplicationDataTable";
import { dashboardData } from "@/dashboard-data";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PieDataChart from "@/components/PieDataChart";

export default function Home() {
  const { applications, responses, interviews } = dashboardData;

  //Apps info for the cards
  const cardsData = [
    { title: "Applications", data: applications, icon: <WorkOutlineIcon /> },
    { title: "Responses", data: responses, icon: <MailOutlineIcon /> },
    { title: "Interviews", data: interviews, icon: <PeopleOutlineIcon /> },
  ];

  /**
   * The function filters the information based on a given parameter
   * @param {*} appStatus
   * @returns The status of the applications
   */
  function getAppStatus(appStatus) {
    return dashboardData.job_application_data.filter(
      (app) => app.response.toLowerCase() === appStatus
    );
  }

  const respondedApps = getAppStatus("responded");
  const rejectedApps = getAppStatus("rejected");
  const pendingApps = getAppStatus("pending");

  //App info for the first chart
  const chart1Data = [
    { id: 0, value: applications.total, label: "Applications" },
    { id: 1, value: responses.total, label: "Responses" },
    { id: 2, value: interviews.total, label: "Interviews" },
  ];

  //App status for the second chart
  const chart2Data = [
    { id: 0, value: respondedApps.length, label: "Responded" },
    { id: 1, value: rejectedApps.length, label: "Rejected" },
    { id: 2, value: pendingApps.length, label: "Pending" },
  ];

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

              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: 0,
                  marginTop: "2rem",
                }}
              >
                <PieDataChart data={chart1Data} />
                <PieDataChart data={chart2Data} />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "2rem" }}>
                <ApplicationDataTable
                  data={dashboardData.job_application_data}
                />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
