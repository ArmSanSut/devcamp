axios.get("https://corona.lmao.ninja/v2/all").then(function(response){
    let dataWorld = response.data;
    console.log('World data is: ',dataWorld);
    let caseWorld = dataWorld.cases;
    console.log('World case is: ',caseWorld);
    let todaycaseWorld = dataWorld.todayCases;
    console.log('Today case is: ',todaycaseWorld );
    let death = dataWorld.deaths;
    console.log('Death is: ',death );
    let Todaydeath = dataWorld.todayDeaths;
    console.log('Today death is: ',Todaydeath );
    let recover = dataWorld.recovered;
    console.log('Recovered is: ',recover );
    let TodayRecover = dataWorld.todayRecovered;
    console.log('Today recovered is: ',TodayRecover);  
})
axios.get("https://corona.lmao.ninja/v2/countries").then(function(res){
    let data = res.data;
    console.log(data);
})