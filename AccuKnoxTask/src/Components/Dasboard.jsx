import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel
} from "@mui/material";

const Dashboard = ({ data, mainData, setDashboard, trackWidgetList, setTrackWidgetList }) => {
  const [open, setOpen] = useState(false);

  const categoryList = {
    cat1: "CSPM Executive Dashboard",
    cat2: "Network Security Overview",
    cat3: "Application Security Insights",
    cat4: "User & Access Monitoring"
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isWidgetSelected = (catId, widgetId) => {
    const category = data.find((c) => c.id === catId);
    return Boolean(category?.widgets.some((w) => w.id === widgetId));
  };

  const toggleWidget = (catId, widget) => {
    setDashboard((prev) =>
      prev.map((cat) => {
        if (cat.id !== catId) return cat;
        const exists = cat.widgets.some((w) => w.id === widget.id);
        if (exists) {
          return { ...cat, widgets: cat.widgets.filter((w) => w.id !== widget.id) };
        } else {
          return { ...cat, widgets: [...cat.widgets, widget] };
        }
      })
    );
  };

  const removeWidget = (catId, widgetId) => {
    setDashboard((prev) =>
      prev.map((cat) =>
        cat.id === catId ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) } : cat
      )
    );
  };

  useEffect(() => {
    const allWidgets = data.flatMap((cat) => cat.widgets);
    setTrackWidgetList(allWidgets);
  }, [data, setTrackWidgetList]);

  return (
    <Box sx={{ width: "95vw", minHeight: "100vh", background: "#f8f8f8", p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{color:"grey"}}>My Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>+ Add Widget</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {data.map((cat) => {
          const visibleWidgets = cat.widgets;
          const placeholders = Math.max(0, 3 - visibleWidgets.length);

          return (
            <Box key={cat.id}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}>
                {categoryList[cat.id]}
              </Typography>

              <Grid container spacing={2}>
                {visibleWidgets.map((widget) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={widget.id}>
                    <Card sx={{ minWidth: 275, minHeight: 200,borderRadius: 3, boxShadow: 3, height: "100%", transition: "0.3s", position: "relative", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>{widget.id}</Typography>
                        <Typography variant="h6" fontWeight="bold">{widget.title}</Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>{widget.content}</Typography>
                        <Button variant="outlined" color="error" size="small" sx={{ mt: 2 }} onClick={() => removeWidget(cat.id, widget.id)}>Remove</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}

                {[...Array(placeholders)].map((_, idx) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={`placeholder-${idx}`}>
                    <Card sx={{ minWidth: 275, borderRadius: 3, boxShadow: "inset 0 0 5px #ddd", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button variant="outlined" color="primary" onClick={handleOpen}>
                        + Add Widget
                      </Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Box>

    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
  <DialogTitle>Select Widgets</DialogTitle>
  <DialogContent dividers>
    {mainData.dashboard.categories.map((cat) => (
      <Box key={cat.id} sx={{ mb: 4 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {categoryList[cat.id]}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2
          }}
        >
          {cat.widgets.map((widget) => (
            <FormControlLabel
              key={widget.id}
              control={
                <Checkbox
                  checked={isWidgetSelected(cat.id, widget.id)}
                  onChange={() => toggleWidget(cat.id, widget)}
                />
              }
              label={widget.title}
            />
          ))}
        </Box>
      </Box>
    ))}
  </DialogContent>

  <DialogActions>
    <Button onClick={handleClose} variant="contained" color="primary">
      Done
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default Dashboard;
