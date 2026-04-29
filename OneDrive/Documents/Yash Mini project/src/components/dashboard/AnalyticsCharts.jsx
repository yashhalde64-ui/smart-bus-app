import React from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, AreaChart, Area
} from "recharts";

// ✅ dummy data (working)
const fuelData = [
  { month: "Jan", consumption: 400, saved: 100 },
  { month: "Feb", consumption: 380, saved: 120 },
  { month: "Mar", consumption: 350, saved: 150 },
  { month: "Apr", consumption: 300, saved: 180 },
];

const co2Data = [
  { month: "Jan", baseline: 500, actual: 400 },
  { month: "Feb", baseline: 480, actual: 380 },
  { month: "Mar", baseline: 450, actual: 350 },
  { month: "Apr", baseline: 420, actual: 300 },
];

export function FuelChart() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Fuel Consumption</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={fuelData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="consumption" fill="blue" />
          <Bar dataKey="saved" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CO2Chart() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h3>CO2 Emission</h3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={co2Data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="baseline" stroke="red" fill="lightcoral" />
          <Area dataKey="actual" stroke="green" fill="lightgreen" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}