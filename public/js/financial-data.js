axios
  .get("http://api.coindesk.com/v1/bpi/historical/close.json")
  .then(responseFromApi => {
      printChart(responseFromApi.data)
  })
  .catch(err => console.log('Error while getting the data: ', err));

  function printChart(stockData) {
      const dailyData = stockData["bpi"];

      const dates = Object.keys(dailyData);
      const prices = dates.map(date => dailyData[date]);

      const ctx = document.getElementById("bit-chart").getContext("2d");
      const chart = new Chart(ctx, {
          type: "line",
          data: {
              labels: dates,
              datasets: [
                {
                    label: 'Stock Chart',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: prices
                  }
              ]
          }
      });
  }