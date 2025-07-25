import { StockData } from '../types/stock';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#4f46e5', '#0ea5e9', '#10b981', '#facc15', '#ef4444', '#6366f1', '#8b5cf6'];

export default function PortfolioChart({ stocks }: { stocks: StockData[] }) {
  const chartData = stocks.reduce((acc, stock) => {
    acc[stock.sector] = (acc[stock.sector] || 0) + stock.portfolioPercent;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(chartData).map(([name, value]) => ({ name, value: parseFloat(value.toFixed(2)) }));

  return (
    <PieChart width={600} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130}>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip formatter={(value: number) => `${value}%`} />
      <Legend />
    </PieChart>
  );
}