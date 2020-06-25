window.onload = function () {
  let newCases = document.getElementById("newCases");
  let totalCases = document.getElementById("totalCases");
  function fetchData() {
    fetch("https://api.covid19api.com/summary")
      .then((resp) => resp.json())
      .then((data) => handleSumData(data))
      .catch((err) => {
        console.log("Error", err);
      });
    fetch("https://api.covid19api.com/countries")
      .then((resp) => resp.json())
      .then((getCountries) => showCountry(getCountries))
      .catch((err) => {
        console.log("Error", err);
      });
  }

  // Summary
  let globalStatus = [];
  function handleSumData(data) {
    globalStatus.push(data.Global);

    for (let i = 0; i < globalStatus.length; i++) {
      let totalConfirmed = document.createElement("td");
      let totalDeath = document.createElement("td");
      let TotalRecovered = document.createElement("td");
      totalConfirmed.innerText = ` Totalt antal fall: ${globalStatus[i].TotalConfirmed} |`;
      totalDeath.innerText = ` Totalt antal döda: ${globalStatus[i].TotalDeaths} |`;
      TotalRecovered.innerText = ` Totalt antal tillfrisknade: ${globalStatus[i].TotalRecovered} |`;
      totalCases.appendChild(totalConfirmed);
      totalCases.appendChild(totalDeath);
      totalCases.appendChild(TotalRecovered);
      let newConfirmed = document.createElement("td");
      let newDeath = document.createElement("td");
      let newRecovered = document.createElement("td");
      newConfirmed.innerText = ` Nya fall: ${globalStatus[i].NewConfirmed} |`;
      newDeath.innerText = ` Nya döda: ${globalStatus[i].NewDeaths} |`;
      newRecovered.innerText = ` Nya tillfrisknade: ${globalStatus[i].NewRecovered} |`;
      newCases.appendChild(newConfirmed);
      newCases.appendChild(newDeath);
      newCases.appendChild(newRecovered);
    }
  }
  fetchData();

  // filter countrys
  const countries = document.getElementById("countries");
  const countryList = [];
  //   const input = document
  //     .getElementById("inputField")
  //     .addEventListener("keyup", searchCountry);

  function showCountry(getCountries) {
    countryList.push(getCountries);
    console.log(countryList);
    for (let i = 0; i < countryList.length; i++) {
      countries.innerText = countryList[i];
    }
  }
};
