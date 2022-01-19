/*
 Template Name: Jassa - Responsive Bootstrap 4 Admin Dashboard
 Author: Therichpost
 File: Dashboard Init
 */

setTimeout(function(){
!function ($) {
  "use strict";

  var Dashboard = function () {
  };

      //creates area chart
      Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
          Morris.Area({
              element: element,
              pointSize: 0,
              lineWidth: 0,
              data: data,
              xkey: xkey,
              ykeys: ykeys,
              labels: labels,
              resize: true,
              gridLineColor: '#2a2c44',
              hideHover: 'auto',
              lineColors: lineColors,
              fillOpacity: .9,
              behaveLikeLine: true
          });
      },

      //creates Donut chart
      Dashboard.prototype.createDonutChart = function (element, data, colors) {
          Morris.Donut({
              element: element,
              data: data,
              resize: true,
              labelColor: '#a5a6ad',
            backgroundColor: '#222437',
              colors: colors
          });
      },
          //creates line chart Dark
    Dashboard.prototype.createLineChart1 = function(element, data, xkey, ykeys, labels, lineColors) {
      Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          gridLineColor: '#2a2c44',
          hideHover: 'auto',
          pointSize: 3,
          resize: true, //defaulted to true
          lineColors: lineColors
      });
  },


      Dashboard.prototype.init = function () {

        


          //creating area chart
          var $areaData = [
              {y: '2013', a:  100, b: 0, c:0},
              {y: '2014', a: 150, b: 45, c:15},
              {y: '2015', a: 60, b: 150, c:220},
              {y: '2016', a: 180, b: 36, c:21},
              {y: '2017', a: 90, b: 60, c:360},
              {y: '2018', a: 75, b: 240, c:120},
              {y: '2019', a: 30, b: 30, c:30}
          ];
          this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b', 'c'], ['Bitcoin', 'Etherium', 'Binance'], ['#fcbe2d', '#02c58d', '#30419b']);

          //creating donut chart
          var $donutData = [
              {label: "Etherium", value: 30},
              {label: "Bitcoin", value: 40},
              {label: "Binance", value: 30}
          ];
          this.createDonutChart('morris-donut-example', $donutData, ['#fcbe2d', '#30419b', '#02c58d']);

                  //create line chart Dark
        var $data1  = [
          { y: '2009', a: 20, b: 5 },
          { y: '2010', a: 45,  b: 35 },
          { y: '2011', a: 50,  b: 40 },
          { y: '2012', a: 75,  b: 65 },
          { y: '2013', a: 50,  b: 40 },
          { y: '2014', a: 75,  b: 65 },
          { y: '2015', a: 100, b: 90 }
      ];
      this.createLineChart1('morris-line-example', $data1, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#30419b', '#02c58d']);



      },
      //init
      $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing 
  function ($) {
      "use strict";
      $.Dashboard.init();
  }(window.jQuery);
}, 1000);