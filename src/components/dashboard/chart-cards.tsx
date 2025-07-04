"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { formatCurrency } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

type ChartData = Record<string, string | number>;

export function ChartCards({
  monthlyData,
  categoryData,
  isLoading
}: {
  monthlyData: ChartData[],
  categoryData: ChartData[],
  isLoading: boolean
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setActiveIndex(null);
  };

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Monthly Overview</CardTitle>
            <CardDescription>Your income and expenses by month</CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Expense Breakdown</CardTitle>
            <CardDescription>How you&apos;re spending your money</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Skeleton className="h-[300px] w-[300px] rounded-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-none shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white space-y-1">
          <CardTitle className="text-xl">Monthly Overview</CardTitle>
          <CardDescription className="text-blue-100">Your income and expenses by month</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#eee' }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `$${Math.abs(value)}`}
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#eee' }}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value) => [`${formatCurrency(Number(value))}`, ""]}
                  contentStyle={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                  }}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                />
                <Bar
                  dataKey="income"
                  name="Income"
                  fill="#4ade80"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  animationDuration={1500}
                />
                <Bar
                  dataKey="expense"
                  name="Expense"
                  fill="#f87171"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  animationDuration={1500}
                />
                <Bar
                  dataKey="savings"
                  name="Savings"
                  fill="#60a5fa"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white space-y-1">
          <CardTitle className="text-xl">Expense Breakdown</CardTitle>
          <CardDescription className="text-purple-100">How you&apos;re spending your money</CardDescription>
        </CardHeader>
        <CardContent className="p-6 flex flex-col items-center">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(props) => {
                    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value } = props;
                    if (cx === undefined || cy === undefined || midAngle === undefined ||
                      innerRadius === undefined || outerRadius === undefined ||
                      percent === undefined || index === undefined) {
                      return null;
                    }

                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    const isActive = index === activeIndex;

                    if (percent < 0.05 && !isActive) {
                      return null;
                    }

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        className="text-xs font-medium"
                        style={{
                          fontWeight: isActive ? 'bold' : 'normal',
                          fontSize: isActive ? '12px' : '10px',
                        }}
                      >
                        {isActive ? `${String(name)}: ${formatCurrency(Number(value))}` : `${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                  outerRadius={120}
                  innerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={1500}
                  animationBegin={200}
                  onMouseEnter={handlePieEnter}
                  onMouseLeave={handlePieLeave}
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#fff"
                      strokeWidth={index === activeIndex ? 2 : 1}
                      style={{
                        filter: index === activeIndex ? 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3))' : 'none',
                        opacity: activeIndex === null || activeIndex === index ? 1 : 0.7,
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatCurrency(Number(value))}
                  contentStyle={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                  }}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  formatter={(value: string) => (
                    <span style={{
                      color: COLORS[categoryData.findIndex(item => item.name === value) % COLORS.length],
                      fontWeight: categoryData.findIndex(item => item.name === value) === activeIndex ? 'bold' : 'normal'
                    }}>
                      {value}
                    </span>
                  )}
                  onMouseEnter={(data) => {
                    const index = categoryData.findIndex((item) => item.name === data.value);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    setActiveIndex(null);
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 