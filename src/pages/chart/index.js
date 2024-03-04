import React from "react";
import Chart from "react-apexcharts";

const ChartPage = () => {
  const dataCharts = [
    // George Washington
    {
      name: "George Washington",
      data: [
        {
          x: "President",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
        {
          x: "President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
      ],
    },
    // John Adams
    {
      name: "John Adams",
      data: [
        {
          x: "President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "President",
          y: [new Date(1810, 3, 21).getTime(), new Date(1814, 2, 4).getTime()],
        },
      ],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    colors: ["#008FFB", "#00E396"],
    fill: {
      type: "solid",
    },
    xaxis: {
      type: "datetime",
    },
    legend: {
      position: "right",
    },
  };

  const dataBar = [
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
      ],
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-06").getTime(),
            new Date("2019-03-09").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-19").getTime(),
          ],
        },
      ],
    },
  ];
  const optionBar = {
    chart: {
      height: 350,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      //   formatter: function (val) {
      //     var a = moment(val[0]);
      //     var b = moment(val[1]);
      //     var diff = b.diff(a, "days");
      //     return diff + (diff > 1 ? " days" : " day");
      //   },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    xaxis: {
      type: "datetime",
    },
    legend: {
      position: "top",
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={dataCharts.map((data) => data)}
        type="rangeBar"
        height={250}
      />
      <br />
      <Chart
        options={optionBar}
        series={dataBar.map((data) => data)}
        type="rangeBar"
        height={350}
      />
    </div>
  );
};

export default ChartPage;
