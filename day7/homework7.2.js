axios.get("https://corona.lmao.ninja/v2/countries/").then(function(res){
            let allCovidData = res.data;
            //debugger;
            //console.log(allCovidData[0]);
            //reduce to find total todayRecovered
            let callbackFunction = (sum, obj) => {
                return sum + obj.todayRecovered
            };
            let totalRecovered = allCovidData.reduce(callbackFunction, 0);
            console.log("Total recovered is :",totalRecovered);

            //filter to find todayDeath
            let filterDeath = allCovidData.filter(obj2 => obj2.todayDeaths < 10 && obj2.population>100000000);
            console.log(filterDeath);
            let mapDeath = filterDeath.map(x => x.country);
            console.log(mapDeath);
        })