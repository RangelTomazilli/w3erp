import Chart from "react-apexcharts";
import { colorsTheme } from "../../../../../theme";

type GraficoDashboardProps = {
  series: number;
};

const GraficoDashboard: ApexCharts.ApexOptions = {
  fill: { colors: [colorsTheme.azul2] },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: "45%" },
      track: { background: `${colorsTheme.azul5}` },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: "12px",
          color: "#fff",
          fontWeight: "bold",
        },
      },
    },
  },
};

export function RadialBar({ series }: GraficoDashboardProps) {
  return (
    <Chart
      series={[series]}
      width={60}
      height={60}
      options={GraficoDashboard}
      type="radialBar"
    />
  );
}
