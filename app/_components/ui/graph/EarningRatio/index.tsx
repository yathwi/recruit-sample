import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// ...

const COLORS = ['#34947A', '#73D4B9', '#A4E6D4', '#E2F3EE'];

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

  const lineLength = 150; // 線の長さを調整してください
  const textOffset = 10; // テキストのオフセットを調整してください

  if (index === 3) {
    // インデックスを2に変更
    const textX = x > cx ? x + lineLength + textOffset : x - lineLength - textOffset;
    const textY = y;
    const lineX = x > cx ? x + lineLength : x - lineLength;
    const lineY = y;

    return (
      <g>
        <line x1={x} y1={y - 40} x2={lineX} y2={lineY - 70} stroke="#C9C9C9" strokeWidth={2} />
        <text
          x={textX}
          y={textY - 80}
          fontSize={16}
          fill="#34947A"
          fontWeight="bold"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          font-family="yu-gothic"
        >
          {name}{' '}
        </text>
        <text
          x={textX}
          y={textY - 50}
          fill="#34947A"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fontSize={32}
          fontWeight="bold"
          fontFamily="Oswald"
        >
          {(percent * 100).toFixed(0)}
          <tspan fontSize={12} alignmentBaseline="baseline" dy={10} dx={5}>
            %
          </tspan>
        </text>
      </g>
    );
  }
  if (index === 0) {
    return (
      <g>
        <text
          x={x}
          y={y - 30}
          fontSize={20}
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
          font-family="yu-gothic"
        >
          {name}{' '}
        </text>
        <text
          x={x}
          y={y + 20}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={64}
          fontWeight="bold"
          fontFamily="Oswald"
        >
          {(percent * 100).toFixed(0)}
          <tspan fontSize={16} alignmentBaseline="baseline" dy={10} dx={5}>
            %
          </tspan>
        </text>
      </g>
    );
  }

  if (index === 0) {
    return (
      <g>
        <text
          x={x}
          y={y - 30}
          fontSize={20}
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
          font-family="yu-gothic"
        >
          {name}{' '}
        </text>
        <text
          x={x}
          y={y + 20}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={64}
          fontWeight="bold"
          fontFamily="Oswald"
        >
          {(percent * 100).toFixed(0)}
          <tspan fontSize={16} alignmentBaseline="baseline" dy={10} dx={5}>
            %
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <g>
      <text
        x={x + 30}
        y={index === 1 ? y - 20 : y - 40}
        fontSize={16}
        fill={index === 1 ? 'white' : '#34947A'}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="central"
        font-family="yu-gothic"
      >
        {name}{' '}
      </text>
      <text
        x={x + 40}
        y={index === 1 ? y + 10 : y - 10}
        fill={index === 1 ? 'white' : '#34947A'}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={32}
        fontWeight="bold"
        fontFamily="Oswald"
      >
        {(percent * 100).toFixed(0)}
        <tspan fontSize={12} alignmentBaseline="baseline" dy={10} dx={5}>
          %
        </tspan>
      </text>
    </g>
  );
};
export const EarningRatio = ({ data }: any) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
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
