$(document).ready(function() {

//Call the function relativeTime every one minute (6000 milliseconds)
    setInterval(relativeTime, 60000);

//<span class="relativetime" title="2015-09-17 18:25:08">1 min ago</span>
//Taking the timestamp from the title attribute of all the elements with the class 'relativetime' and pass it to the function 'timeSince'.
    function relativeTime() {

        $('.relativetime').each(function () {
            $(this).text((timeSince($(this).attr('title').replace(" ", "T"))));
        });
    }

//Global Variables
    var DURATION_IN_SECONDS = {
        epochs: ['year', 'month', 'day', 'hour', 'minute'],
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60
    };

//Calculating the duration
    function getDuration(seconds) {
        var epoch, interval;

        for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
            epoch = DURATION_IN_SECONDS.epochs[i];
            interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
            if (interval >= 1) {
                return {interval: interval, epoch: epoch};
            }
        }

    };
});
