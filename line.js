
console.log(this.document.getElementById("myChart"));
 var myChart = new Chart(this.document.getElementById("myChart"), {
  type: 'bar',
  data: {
    labels: ["Group 1", "Group 2", "Group 3"],
    datasets: [{
      label: 'Groups',
      data: [12, 50, 23]
    }]
  }
});

var myChart2 = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [0],
    datasets: [{
      data: [0],
      label: arr[0][0],
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [0],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }, {
      data: [0],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false
    }, {
      data: [0],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false
    }, {
      data: [0],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }, {
      data: [0],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }, {
      data: [0],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }, {
      data: [0],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }

});

