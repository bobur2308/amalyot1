"use-strict"
const seriesDB = {
    count:0,
    series: {},
    actors:{},
    genres:[],
    private:false,
    start:()=>{
        seriesDB.count = +prompt("Nechta serial ko'rgansiz");
        while(seriesDB.count=="" || seriesDB.count==null || isNaN(seriesDB.count)){
            seriesDB.count = prompt("Nechta serial ko'rgansiz");
        }
    },
    rememberSeries:()=>{
        
        for (let i=1;i<3;i++){
            const serieName = prompt("Oxirgi ko'rgan serialingiz?");
            const count = prompt("Nechi baxo berasiz?");
            if (serieName=="" & count==""){
                i--;
            }else{
                seriesDB.series[serieName] = count;
            }
        }
    },
    showDB:()=>{
        if(seriesDB.private==false){
            console.log(seriesDB.series);
        }
    },
    fvrts:()=>{
        for(let i=1;i<4;i++){
            let ask = prompt("Yaxshi ko'rgan janiringiz? ")
            if (ask=="" || ask==null){
                i--;
            }else{
                seriesDB.genres.push(ask)
            }
        }
        console.log(seriesDB.genres.forEach((item,index)=>{
            console.log(`Yaxshi ko'rgan janringiz ${item} nomi, massivdagi ${index} element`);
        }));
    },
    visibleDB:()=>{
        seriesDB.private=!seriesDB.private;
    },
}
seriesDB.start();
seriesDB.rememberSeries();
seriesDB.showDB();
seriesDB.fvrts();
seriesDB.visibleDB();








