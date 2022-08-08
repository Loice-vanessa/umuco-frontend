import "./pieChart.css";
import React from "react";
import { PieChart, Pie, Cell, XAxis } from "recharts";

const data = [
  { name: "Nyungwe", Income: 400, },
  { name: "Muhazi", Income: 300 },
  { name: "Gishwati", Income: 300 },
  { name: "Akagera", Income: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
    data={data}
      x={x}
      y={y}
      fill="tour"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >  Tours
      {`${(percent * 100).toFixed(0)}%`}
    
    </text>
  );
};
export default function AppPie() {
  return (
    <PieChart width={800} height={800}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="Income"
      >
        
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
