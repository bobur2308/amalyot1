let numberOfSeries;
(function startApp(){
    numberOfSeries = +prompt("Nechta serial ko'rgansiz");
    while(numberOfSeries=="" || numberOfSeries==null || isNaN(numberOfSeries)){
        numberOfSeries = prompt("Nechta serial ko'rgansiz");
    }
})()
const seriesDB = {
    count:numberOfSeries,
    series: {},
    actors:{},
    genres:[],
    private:false
}
const series = {}
function rememberMySeries(){
    for (let i=1;i<3;i++){
        const serieName = prompt("Oxirgi ko’rgan serialingiz?");
        const count = prompt("Nechi baxo berasiz?");
        if (serieName=="" & count==""){
            i--;
        }else{
            series[serieName] = count;
        }
    }
}
rememberMySeries()

function showDB(){
    if(seriesDB.private==false){
        console.log(series);
    }
}

showDB();

function fvrts(){
    const favorites= []
    for(let i=1;i<4;i++){
        let ask = prompt("Yaxshi ko'rgan janiringiz? ")
        if (ask=="" || ask==null){
            i--;
        }else{
            favorites.push(ask)
        }
    }
    console.log(favorites);
}
fvrts()


