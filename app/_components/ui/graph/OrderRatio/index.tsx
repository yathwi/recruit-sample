import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// ...

const COLORS = ['#34947A', '#73D4B9'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y - 50}
        fontSize={20}
        fill="white"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="yu-gothic"
      >
        {name}{' '}
      </text>
      <text
        x={x}
        y={y}
        fill="white"
        fontFamily="oswald"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={64}
        fontWeight="bold"
      >
        {(percent * 100).toFixed(0)}
        <tspan fontSize={16} alignmentBaseline="baseline" dy={10} dx={5}>
          %
        </tspan>
      </text>
    </g>
  );
};
export const OrderRatio = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          animationDuration={1000}
          animationBegin={0}
          animationEasing="ease-out"
          startAngle={-270} // ここを追加
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
