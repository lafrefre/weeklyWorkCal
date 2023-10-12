function updateTime(){
    let today = moment();
    let hour = today.hour();
    let minute = today.minute();
    let second = today.second();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    let time = hour + ':' + minute + ':' + second + ' ' + ampm;
    document.getElementById('currentDay').innerHTML = time;
}
setInterval(updateTime, 1000);
updateTime();


