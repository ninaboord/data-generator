    var parts = [];
    var serials = [];
    
    for (i = 0; i < 20; i++){
        let part = Math.floor(Math.random()*9000) + 1000;
        let partString = part.toString();
        let part2 = Math.floor(Math.random()*9000) + 1000;
        let part2String = part2.toString();

        parts.push(partString + "-" + part2String)
        serials.push(partString)
    }

    let random60 = Math.floor(Math.random() * 59) + 1
    let random24 = Math.floor(Math.random() * 23) + 1

    let firstHour = 8; //enter truck arrival hour
    let firstMinute = 25; //enter truck arrival minute
    let newSecond = 50; //enter truck arrival second

    var seconds = [];
    var minutes = [];
    var hours = [];

    function addSecond(){
        let interval;
         for (i = 0; i < 20; i++){
            interval = Math.floor(Math.random() * 15) + 3
            newSecond = newSecond + interval;

            if(newSecond > 59){
                firstMinute = firstMinute + 1;
                newSecond = interval - 3;
            } 
            if (firstMinute > 59){
                firstHour = firstHour + 1;
                firstMinute = interval - 3;
                
            }
            if (firstHour > 24){
                firstHour = 0;
            }

            if (newSecond < 10){
                let sec = "0" + newSecond;
                seconds.push(sec);
            } else{
                seconds.push(newSecond);
            }
        
            if (firstMinute < 10){
                let min = "0" + firstMinute;
                minutes.push(min);
            } else{
                minutes.push(firstMinute);
            }
        
            if (firstHour < 10){
                let hr = "0" + firstHour;
                hours.push(hr);
            } else{
                hours.push(firstHour);
            }
        
        }

      
        
    }

    addSecond();

    
    document.getElementById("time0").innerHTML = `${hours[0]}:${minutes[0]}:${seconds[0]}`;
    document.getElementById("time1").innerHTML = `${hours[1]}:${minutes[1]}:${seconds[1]}`;
    document.getElementById("time2").innerHTML = `${hours[2]}:${minutes[2]}:${seconds[2]}`;
    document.getElementById("time3").innerHTML = `${hours[3]}:${minutes[3]}:${seconds[3]}`;
    document.getElementById("time4").innerHTML = `${hours[4]}:${minutes[4]}:${seconds[4]}`;
    document.getElementById("time5").innerHTML = `${hours[5]}:${minutes[5]}:${seconds[5]}`;
    document.getElementById("time6").innerHTML = `${hours[6]}:${minutes[6]}:${seconds[6]}`;
    document.getElementById("time7").innerHTML = `${hours[7]}:${minutes[7]}:${seconds[7]}`;
    document.getElementById("time8").innerHTML = `${hours[8]}:${minutes[8]}:${seconds[8]}`;
    document.getElementById("time9").innerHTML = `${hours[9]}:${minutes[9]}:${seconds[9]}`;
    document.getElementById("time10").innerHTML = `${hours[10]}:${minutes[10]}:${seconds[10]}`;
    document.getElementById("time11").innerHTML = `${hours[11]}:${minutes[11]}:${seconds[11]}`;
    document.getElementById("time12").innerHTML = `${hours[12]}:${minutes[12]}:${seconds[12]}`;
    document.getElementById("time13").innerHTML = `${hours[13]}:${minutes[13]}:${seconds[13]}`;
    document.getElementById("time14").innerHTML = `${hours[14]}:${minutes[14]}:${seconds[14]}`;
    document.getElementById("time15").innerHTML = `${hours[15]}:${minutes[15]}:${seconds[15]}`;
    document.getElementById("time16").innerHTML = `${hours[16]}:${minutes[16]}:${seconds[16]}`;
    document.getElementById("time17").innerHTML = `${hours[17]}:${minutes[17]}:${seconds[17]}`;
    document.getElementById("time18").innerHTML = `${hours[18]}:${minutes[18]}:${seconds[18]}`;
    document.getElementById("time19").innerHTML = `${hours[19]}:${minutes[19]}:${seconds[19]}`;


    document.getElementById("part0").innerHTML = parts[0];
    document.getElementById("part1").innerHTML = parts[1];
    document.getElementById("part2").innerHTML = parts[2];
    document.getElementById("part3").innerHTML = parts[3];
    document.getElementById("part4").innerHTML = parts[4];
    document.getElementById("part5").innerHTML = parts[5];
    document.getElementById("part6").innerHTML = parts[6];
    document.getElementById("part7").innerHTML = parts[7];
    document.getElementById("part8").innerHTML = parts[8];
    document.getElementById("part9").innerHTML = parts[9];
    document.getElementById("part10").innerHTML = parts[10];
    document.getElementById("part11").innerHTML = parts[11];
    document.getElementById("part12").innerHTML = parts[12];
    document.getElementById("part13").innerHTML = parts[13];
    document.getElementById("part14").innerHTML = parts[14];
    document.getElementById("part15").innerHTML = parts[15];
    document.getElementById("part16").innerHTML = parts[16];
    document.getElementById("part17").innerHTML = parts[17];
    document.getElementById("part18").innerHTML = parts[18];
    document.getElementById("part19").innerHTML = parts[19];


    document.getElementById("serial0").innerHTML = serials[0];
    document.getElementById("serial1").innerHTML = serials[1];
    document.getElementById("serial2").innerHTML = serials[2];
    document.getElementById("serial3").innerHTML = serials[3];
    document.getElementById("serial4").innerHTML = serials[4];
    document.getElementById("serial5").innerHTML = serials[5];
    document.getElementById("serial6").innerHTML = serials[6];
    document.getElementById("serial7").innerHTML = serials[7];
    document.getElementById("serial8").innerHTML = serials[8];
    document.getElementById("serial9").innerHTML = serials[9];
    document.getElementById("serial10").innerHTML = serials[10];
    document.getElementById("serial11").innerHTML = serials[11];
    document.getElementById("serial12").innerHTML = serials[12];
    document.getElementById("serial13").innerHTML = serials[13];
    document.getElementById("serial14").innerHTML = serials[14];
    document.getElementById("serial15").innerHTML = serials[15];
    document.getElementById("serial16").innerHTML = serials[16];
    document.getElementById("serial17").innerHTML = serials[17];
    document.getElementById("serial18").innerHTML = serials[18];
    document.getElementById("serial19").innerHTML = serials[19];



    
    
    
    
    
    
    
    
    









