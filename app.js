function ramdancounting() {
    var ramdanDate = new Date('February 28, 2025'); 
    var todayDate = new Date(); 
    var diff = ramdanDate.getTime() - todayDate.getTime();
 //    find day
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
 //    find hour
    var hour = Math.floor(diff / (1000 * 60 * 60 ));
 //    find minutes
    var minutes = Math.floor(diff/ (1000 * 60 ));
    
    console.log(days);
    console.log(hour);
    console.log(minutes)
    document.getElementById("days").innerHTML =`"${days}"<br>Days<br>Left` ;
    document.getElementById("hours").innerHTML =`"${hour}"<br>Hours<br>Left` ;
    document.getElementById("minutes").innerHTML =`"${minutes}"<br>Minutes<br>Left` ;
}

ramdancounting();