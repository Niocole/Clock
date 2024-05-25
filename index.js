getTime = setInterval(() => {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hour = now.getHours();
    // console.log(hour);
    let minute = now.getMinutes();
    // console.log(minute);
    let second = now.getSeconds();
    // console.log(millisecond);

    
    if (hour < 10) {
        hour = "0" + hour.toString();
    } else if (minute < 10) {
        minute = "0" + minute.toString();
    } else if (second < 10) {
        second = "0" + second.toString();
    }

    clock.innerHTML = `${hour}:${minute}:${second}`;
    console.log(`${hour}:${minute}:${second}`);
}, 500)
