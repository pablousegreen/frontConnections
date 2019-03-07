var promiseCount =0;

let miPrimeraPromise = new Promise((resolve, reject)=>{
        // using built-in methods       
        // the event to time goes here:
        setTimeout((val)=>{
                    resolve("S U C C E S S M Y F R I E N D ",val );
                }, 3000);
    });        
        

    miPrimeraPromise.then((message)=>{
        console.log("¡Sí! " + message);
    }).catch(error =>{
        console.log("Error! " + error);
    });

let getDateRange = new Promise((resolve, reject)=>{
    if(isDateValidforTime(new Date())){
        resolve(true);
    }else{
        resolve(false);
    }    
});

//VALIDAR SI ES MAYOR DE EDAD
function isDateValidforTime(dateVal){    
    var start = new Date();
    var end = new Date();
    var dateIsAdult = new Date();
    var dateIsToOld = new Date();
    console.log("Date to validate ",dateVal);
    //date.setDate( date.getFullYear() );
    /*console.log("1=====>",date.getUTCDay());
    console.log("1=====>",date.getUTCMonth()+1);
    console.log("1=====>",date.getFullYear()-18);
    console.log("2=====>",new Date(end));*/
    dateIsAdult = new Date(dateIsAdult.getFullYear()-18, dateIsAdult.getUTCMonth()+1, dateIsAdult.getUTCDay());
    dateIsToOld = new Date(dateIsToOld.getFullYear()-150, dateIsToOld.getUTCMonth()+1, dateIsToOld.getUTCDay());
    console.log("Less 18 years=====>",dateIsAdult);
    if(dateVal <=  dateIsAdult ){
        console.log("OK=====> IT IS ADULT", dateVal);
        return true;
    }

    if( dateVal>=dateIsToOld){
        console.log("OK=====> IT HAS ADEQUATE AGE", dateVal);
        return true;
    }

    /*var elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
    console.log("3=====>",new Date(elapsed));*/
    return false;
}

getDateRange.then((res)=>{
    console.log("¡Es mayor de edad ! " + res);
    matchDate("29/02/9999").then ((res)=>{
        console.log("************ VALID DATE: ", res);
    }).catch((error)=>{
        console.log("MAL:", error);
    });
    dates (); 
});

//31/12/2019
function matchDate(dateRev){
    return new Promise((resolve, reject)=>{
        try{
                console.log("========>Date to validate:", dateRev );      
                var reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                let primres = reg.test(dateRev);
                console.log("==>>> ", primres);
                resolve(primres);
                let res = dateRev.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);
                console.log("=========>Is valid Date:", res );   
                //resolve(res);
                //return res;
            }catch(error){
                reject(new Error("===>Error", error));
            }
        });  
}


function dates (){
    const regex = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/

    const testData = [
        '02/02/0000',
        '02/02/9999',
        '02/02/20199',
        '02/02/2019',
    '32/01/2020',
    '33/03/2020',
    '02/02/3000',
    '02/02/1904',
    '02/12/2008',
    '02/29/2012',
    '02/29/2013',
    '06/31/2013',
    '01/31/2013',
    '02/02/1916',
    '02/02/2020',
    '02/02/2024',
    '02/02/2036',
    '02/02/1952',
    '02/02/2056',
    '01/01/2256',
    '02/29/2000',
    '02/29/2100',
    '02/29/1900',
    '02/29/1200',
    '02/29/2400',
    '02/28/2018',
    '02/29/2018',
    '02/30/2018',
    '02/28/2019',
    '02/29/2019',
    '02/30/2019'
    ]
    for (let date of testData) {
        console.log(`${date} ${regex.test(date)}`)
        }
    /*return new Promise((resolve, reject)=>{
        try{
        const res = regex.test(date);
        }catch(error){
            reject(error);
        }
        resolve(res);
    });        */
}