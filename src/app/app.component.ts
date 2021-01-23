import { Component } from '@angular/core';
import { faHome, faEnvelope,faPhoneAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  faPhoneAlt = faPhoneAlt;
  faGlobe = faGlobe;
  faHome = faHome;
  faEnvelope = faEnvelope;

  timelineChart: Chart = new Chart({
    chart: {
      type: 'timeline',
      backgroundColor: '#384b60'
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false
    },
    title: {
      text: ''
    },
    series: [{
      type: undefined,
      data: [{
        name: '2017',
        label: 'Title',
        description: 'Company Name'
      }, {
        name: '2018',
        label: 'Title',
        description: 'Company Name'
      }, {
        name: '2019',
        label: 'Title',
        description: 'Company Name'
      }, {
        name: '2020',
        label: 'Title',
        description: 'Company Name'
      }]
    }]
  });

  doughnutChart: Chart = new Chart({
    chart: {
        type: 'pie',
        backgroundColor: '#384b60'
    },
    title: {
        text: ''
    },
    plotOptions: {
        pie: {
            shadow: false,
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Skills',
        data: [{
          name: 'Python',
          y: 23.3,
          color: '#844d93'
        }, {
          name: 'Wireframe',
          y: 20.9,
          color: '#ffaa85'
        }, {
          name: 'Java',
          y: 23.3,
          color: '#ef8987'
        }, {
          name: 'HTML/CSS',
          y: 18.6,
          color: '#b15a92'
        }],
        type: undefined,
    }]
})
  barChart: Chart = new Chart({
    chart: {
      type: 'column',
      backgroundColor: '#384b60'
    },
    title: {
        text: ''
    },
    xAxis: {
      categories: [
          'Wix.com',
          'Weebly',
          'Wordpress',
          'Heroku'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
    },
    series: [{
      type: undefined,
      name: 'Websites',
      data: [{color: '#ffaa85', y: 10}, 
      {color: '#ffaa85', y: 40},
      {color: '#ffaa85', y: 20},
      {color: '#ffaa85', y: 40}]
    }]
  })
}
