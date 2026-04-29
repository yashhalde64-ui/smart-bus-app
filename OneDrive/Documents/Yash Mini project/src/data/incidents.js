export const incidents = [
  {
    id: 1,
    incident_id: "INC001",
    date: "2026-04-01",
    bus_id: "BUS001",
    driver_id: "D001",
    incident_type: "Delay",
    description: "Traffic jam",
    status: "Resolved",
    resolution_time: "20 min",
    notified_parents: true,
    severity: "medium",
  },
  {
    id: 2,
    incident_id: "INC002",
    date: "2026-04-05",
    bus_id: "BUS002",
    driver_id: "D002",
    incident_type: "Breakdown",
    description: "Engine issue",
    status: "Open",
    resolution_time: "",
    notified_parents: false,
    severity: "high",
  }
];