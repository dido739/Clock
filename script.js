function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDate();
    var dayOfWeek = currentTime.getDay(); // 0-6 (Sunday-Saturday)
    var dayOfYear = Math.floor((currentTime - new Date(currentTime.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    var month = currentTime.getMonth() + 1; // 0-11 (January-December)
    var year = currentTime.getFullYear();

    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    var formattedTime = hours + ":" + minutes + ":" + seconds;
    var formattedDate = year + "-" + month + "-" + day;
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var formattedDayOfWeek = daysOfWeek[dayOfWeek];

    document.getElementById('time').innerHTML = "Time: " + formattedTime;
    document.getElementById('date').innerHTML = "Date: " + formattedDate;
    document.getElementById('dayOfWeek').innerHTML = "Day of Week: " + formattedDayOfWeek;
    document.getElementById('dayOfYear').innerHTML = "Day of Year: " + dayOfYear;

    setTimeout(updateClock, 1000);
}

updateClock();
