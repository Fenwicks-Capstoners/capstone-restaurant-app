async function makeSchedule(userCollection){
    let i;
//create schedule
    let sched = [14][3];
    let employ = [];
    let manag = [];

    for(i = 0; i< userCollection.length; i++) {
        if (userCollection[i].admin == "on") {
            manag += userCollection[i];
        } else {
            employ += userCollection[i];
        }
    }
    for(i = 0; i<14; i++) {
        sched[i][0] = manag[i];
        for (let j = 1; j < 3; j++) {
            sched[i][j] = employ[j];
        }
    }

    return sched;
}