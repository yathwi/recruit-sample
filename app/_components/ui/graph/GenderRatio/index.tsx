'use client';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

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
  const textX = x > cx ? x + lineLength + textOffset : x - lineLength - textOffset;
  const textY = y;

  return (
    <g>
      <text
        x={textX}
        y={index === 0 ? textY - 20 : textY + 100}
        fontSize={24}
        fill="#34947A"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {name}{' '}
      </text>
      <text
        x={textX}
        y={index === 0 ? textY + 30 : textY + 150}
        fill="#34947A"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={64}
        fontWeight="bold"
      >
        <tspan fontSize={24} alignmentBaseline="baseline" dy={10} dx={5}>
          約
        </tspan>
        {(percent * 100).toFixed(0)}
        <tspan fontSize={24} alignmentBaseline="baseline" dy={16} dx={5}>
          %
        </tspan>
      </text>
    </g>
  );
};

export const GenderRatio = ({ data }: any) => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleAnimation = (inView: boolean) => {
    if (inView) {
      setIsAnimationActive(true);
    }
  };

  return (
    <div className=" border-l-2 flex">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            label={renderCustomizedLabel}
            animationDuration={1000}
            animationBegin={0}
            animationEasing="ease-out"
            startAngle={-270}
            cursor="default"
          >
            {data.map((entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>{' '}
          <g>
            <circle cx="50%" cy="50%" r={75} fill="white" />
            <text
              x="50%"
              y="43%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              fontSize={20}
              fontWeight="bold"
            >
              従業員数
            </text>
            <text
              x="50%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              fontSize={40}
              fontWeight="bold"
            >
              2,031
              <tspan fontSize={14} alignmentBaseline="baseline" dy={5} dx={-5}>
                人
              </tspan>
            </text>
          </g>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
