import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { subDays, addDays, format } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectMonthWater, selectWaterDate } from '../../redux/selectors';
import { useWindowSize } from '../../helpers/useWindowSize';
import css from './Chart.module.css';
export const Chart = () => {
  const monthData = useSelector(selectMonthWater);
  const dayOfMonth = useSelector(selectWaterDate);
  const selectDay = new Date(dayOfMonth);
  const start = subDays(selectDay, 6);
  const end = selectDay;
  const weekDays = [];
  for (let day = start; day <= end; day = addDays(day, 1)) {
    weekDays.push(day);
  }

  const weeklyData = weekDays.map((day) => {
    const dayData = monthData.find(
      (data) =>
        format(new Date(data.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    );
    return {
      key: format(day, 'yyyy-MM-dd'),
      day: format(day, 'dd'),
      totalDayWater: dayData ? dayData.totalDayWater / 1000 : 0,
    };
  });

  const renderDot = (props) => {
    const { cx, cy, key } = props;
    return (
      <g key={key}>
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill="#FFFFFF"
          stroke="#4CAF50"
          strokeWidth={2}
        />
      </g>
    );
  };
  const { width } = useWindowSize();
  let chartHeight;
  let padding;
  let margin;
  if (width >= 1440) {
    chartHeight = 251;
    padding = 25;
    margin = 49;
  } else if (width >= 768) {
    chartHeight = 251;
    padding = 45;
  } else {
    chartHeight = 268;
    padding = 20;
  }
  return (
    <div className={css.container}>
      <ResponsiveContainer
        width="100%"
        height={chartHeight}
        marginTop={margin}
        style={{
          paddingTop: 5,
        }}
      >
        <AreaChart
          data={weeklyData}
          margin={{
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{
              left: padding,
            }}
          />
          <YAxis
            dataKey="totalDayWater"
            tickFormatter={(value) => value.toFixed(1)}
            unit="L"
            tick={{
              stroke: 'black',
              strokeWidth: 0.2,
            }}
            axisLine={false}
            tickLine={false}
            padding={{
              bottom: 20,
            }}
          />
          <Tooltip formatter={(value) => `${value} L`} />
          <Area
            dataKey="totalDayWater"
            stroke="#4CAF50"
            fill="url(#colorUv)"
            dot={renderDot}
            activeDot={{ r: 8 }}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CAF50" stopOpacity={1} />
              <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
