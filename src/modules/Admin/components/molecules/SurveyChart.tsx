"use client";
import type { ReactNode } from "react";
import { Pie, PieChart } from "recharts";

interface SurveyChartProps {
  data: { name: string; value: number; fill: string }[];
  label: string;
  startAngle?: number;
  children?: ReactNode;
}

const SurveyChart = ({ data, label, startAngle = 90, children }: SurveyChartProps) => {
  return (
    <div role="img" aria-label={label} className="relative shrink-0">
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={52}
          outerRadius={80}
          startAngle={startAngle}
          endAngle={startAngle - 360}
          stroke="none"
        />
      </PieChart>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default SurveyChart;
