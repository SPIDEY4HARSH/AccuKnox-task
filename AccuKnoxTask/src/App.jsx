import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import dashboardData from "./data.json";
import Dashboard from "./Components/Dasboard";

function App() {
  const [trackWidgetList, setTrackWidgetList] = useState([]);

  const [dashboard, setDashboard] = useState(() =>
    dashboardData.dashboard.categories.map((cat) => ({
      ...cat,
      widgets: cat.widgets.slice(0, 2),
    }))
  );

  useEffect(() => {
    const allWidgets = dashboard.flatMap((cat) => cat.widgets);
    setTrackWidgetList(allWidgets);
  }, [dashboard]);

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", m: 0, p: 0 }}>
      <Dashboard
        data={dashboard}
        mainData={dashboardData}
        setDashboard={setDashboard}
        trackWidgetList={trackWidgetList}
        setTrackWidgetList={setTrackWidgetList}
      />
    </Box>
  );
}

export default App;
