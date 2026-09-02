// Question 01
function describeValue(value){
    let type=typeof value;
    let result;
    if(value){
        result="truthy";
    }
    else{
        result="falsy";
    }
    return type + " | " + result;
}

// Question 02
function getDayType(day){
    day=day.toLowerCase();
    switch(day){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid day";
    }
}

//Question 03
function validateUsername(username){
    if(username.length<4){
        return "Too short";
    }
    if(username.includes(" ")){
        return "No space allowed";
    }
    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    return "Available";
}

//Question 04
function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare=50;
    if(distance>2){
        fare=fare+(distance-2)*15;
    }
    fare=fare+waitingMinutes*2;
    if(isNight){
        fare=fare*1.2;
    }
}

//Question 05
const getChaseVerdict=(target, scored, ballsLeft)=>{
    const runsNeeded=target-scored;
    if(runsNeeded<=0){
        return "Won";
    }
    if(ballsLeft<=0){
        return "Lost";
    }
    const requiredRate=(runsNeeded/ballsLeft)*6;
    let verdict;
    if(requiredRate<=6){
        verdict="Comfortable";
    }
    else if(requiredRate<=12){
        verdict="Tough";
    }
    else{
        verdict="Almost Impossible";
    }
    return "Need "+runsNeeded+" runs in "+ballsLeft+" balls | "+verdict;
}
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));