var now=new Date,days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),months=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),date=(now.getDate()<10?"0":"")+now.getDate();function fourdigits(e){return e<1e3?e+1900:e}today=days[now.getDay()]+", "+months[now.getMonth()]+" "+date+", "+fourdigits(now.getYear()),document.write(today);