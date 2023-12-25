var bullishVotes = 0;
var bearishVotes = 0;
var hasVoted = false;

function vote(direction) {
  if (!hasVoted) {
    if (direction === "bullish") {
      bullishVotes++;
      document.getElementById("bullishBtn").disabled = true;
    } else if (direction === "bearish") {
      bearishVotes++;
      document.getElementById("bearishBtn").disabled = true;
    }

    hasVoted = true;
  }

  var totalVotes = bullishVotes + bearishVotes;
  var bullishPercentage = Math.round((bullishVotes / totalVotes) * 100);
  var bearishPercentage = Math.round((bearishVotes / totalVotes) * 100);

  document.getElementById("voteCount").innerHTML =
    "Bullish: " + bullishPercentage + "%, Bearish: " + bearishPercentage + "%";

  updateChart();
}

function updateChart() {
  var voteChartCanvas = document.getElementById("voteChart").getContext("2d");

  new Chart(voteChartCanvas, {
    type: "pie",
    data: {
      labels: ["Bullish", "Bearish"],
      datasets: [
        {
          data: [bullishVotes, bearishVotes],
          backgroundColor: ["#4caf50", "#f44336"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
