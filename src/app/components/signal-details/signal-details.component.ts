import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-signal-details',
  templateUrl: './signal-details.component.html',
  styleUrls: ['./signal-details.component.css']
})
export class SignalDetailsComponent implements OnInit {
  priceDailyLineChart: typeof Highcharts = Highcharts;
  powerDailyLineChart: typeof Highcharts = Highcharts;
  scoreDailyLineChart: typeof Highcharts = Highcharts;
  priceWeeklyLineChart: typeof Highcharts = Highcharts;
  powerWeeklyLineChart: typeof Highcharts = Highcharts;
  scoreWeeklyLineChart: typeof Highcharts = Highcharts;
  priceMonthlyLineChart: typeof Highcharts = Highcharts;
  powerMonthlyLineChart: typeof Highcharts = Highcharts;
  scoreMonthlyLineChart: typeof Highcharts = Highcharts;
  priceThreeMonthlyLineChart: typeof Highcharts = Highcharts;
  powerThreeMonthlyLineChart: typeof Highcharts = Highcharts;
  scoreThreeMonthlyLineChart: typeof Highcharts = Highcharts;
  priceYearlyLineChart: typeof Highcharts = Highcharts;
  powerYearlyLineChart: typeof Highcharts = Highcharts;
  scoreYearlyLineChart: typeof Highcharts = Highcharts;

  priceDailyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قیمت'
    },
    series: [
      {
        name: 'قیمت',
        type: 'line',
        data: [10, 5, 8, 15, 7],
        color: 'orange'
      }
    ]
  };
  powerDailyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قدرت'
    },
    series: [
      {
        name: 'قدرت',
        type: 'line',
        data: [3, 8, 0.1, 0, 4],
        color: 'red'
      }
    ]
  };
  scoreDailyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار امتیاز'
    },
    series: [
      {
        name: 'امتیاز',
        type: 'line',
        data: [8, 2, 1, 6.5, -2],
        color: 'blue'
      }
    ]
  };

  priceWeeklyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قیمت'
    },
    series: [
      {
        name: 'قیمت',
        type: 'line',
        data: [10, 5, 8, 15, 7],
        color: 'orange'
      }
    ]
  };
  powerWeeklyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قدرت'
    },
    series: [
      {
        name: 'قدرت',
        type: 'line',
        data: [3, 8, 0.1, 0, 4],
        color: 'red'
      }
    ]
  };
  scoreWeeklyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار امتیاز'
    },
    series: [
      {
        name: 'امتیاز',
        type: 'line',
        data: [8, 2, 1, 6.5, -2],
        color: 'blue'
      }
    ]
  };

  priceMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قیمت'
    },
    series: [
      {
        name: 'قیمت',
        type: 'line',
        data: [10, 5, 8, 15, 7],
        color: 'orange'
      }
    ]
  };
  powerMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قدرت'
    },
    series: [
      {
        name: 'قدرت',
        type: 'line',
        data: [3, 8, 0.1, 0, 4],
        color: 'red'
      }
    ]
  };
  scoreMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار امتیاز'
    },
    series: [
      {
        name: 'امتیاز',
        type: 'line',
        data: [8, 2, 1, 6.5, -2],
        color: 'blue'
      }
    ]
  };

  priceThreeMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قیمت'
    },
    series: [
      {
        name: 'قیمت',
        type: 'line',
        data: [10, 5, 8, 15, 7],
        color: 'orange'
      }
    ]
  };
  powerThreeMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قدرت'
    },
    series: [
      {
        name: 'قدرت',
        type: 'line',
        data: [3, 8, 0.1, 0, 4],
        color: 'red'
      }
    ]
  };
  scoreThreeMonthlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار امتیاز'
    },
    series: [
      {
        name: 'امتیاز',
        type: 'line',
        data: [8, 2, 1, 6.5, -2],
        color: 'blue'
      }
    ]
  };

  priceYearlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قیمت'
    },
    series: [
      {
        name: 'ثیمت',
        type: 'line',
        data: [10, 5, 8, 15, 7],
        color: 'orange'
      }
    ]
  };
  powerYearlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار قدرت'
    },
    series: [
      {
        name: 'قدرت',
        type: 'line',
        data: [3, 8, 0.1, 0, 4],
        color: 'red'
      }
    ]
  };
  scoreYearlyLineChartOptions: Highcharts.Options = {
    title: {
      text: 'نمودار امتیاز'
    },
    series: [
      {
        name: 'امتیاز',
        type: 'line',
        data: [8, 2, 1, 6.5, -2],
        color: 'blue'
      }
    ]
  };

  constructor() {
  }
  ngOnInit(): void {
  }
}
