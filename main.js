const numberOfSeries = prompt("Nechta serial ko'rgansiz");

const seriesDB = {
    count:numberOfSeries,
    series: undefined,
    actors:undefined,
    genres:[],
    private:false
}
const series = {}
for (let i=1;i<3;i++){
    const serieName = prompt("Oxirgi ko’rgan serialingiz?");
    const count = prompt("Nechi baxo berasiz?");
    if (serieName=="" & count==""){
        i--;
    }else{
        series[serieName] = count;
    }
    
}


console.log(series);
