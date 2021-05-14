function watchTime() {
    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dayOption = 'AM';

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    if(hour === 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        dayOption = 'PM';
    }


    let time = hour + " : " + minutes + " : " + seconds + " - " + dayOption;

    document.querySelector('#myTime').innerText = time;
    
    setTimeout(watchTime, 1000);

}
watchTime();
