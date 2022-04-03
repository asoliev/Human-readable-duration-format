function fromSecondsToDate(seconds) {
    let secs = seconds;
    const day = 365, hour = 24, min = 60, sec = 60;
    
    let year_diff = sec * min * hour * day;
    let years = Math.floor(secs / year_diff);
    secs -=  years * year_diff;
    
    let day_diff = sec * min * hour;
    let days = Math.floor(secs / day_diff);
    secs -=  days * day_diff;
    
    let hour_diff = sec * min;
    let hours = Math.floor(secs / hour_diff);
    secs -= hours * hour_diff;
    
    let mins = Math.floor(secs / 60);
    secs -= mins * 60;
    
    return [years, days, hours, mins, secs];
}
function getT(date, plural, single) {
    if (date > 0) {
        return `${date} ${date > 1 ? plural : single}`;
    }
    return '';
}
function formatDuration(seconds) {
    let fSD = fromSecondsToDate(seconds);
    
    let year_t = getT(fSD[0], 'years', 'year');
    let day_t = getT(fSD[1], 'days', 'day');
    let hour_t = getT(fSD[2], 'hours', 'hour');
    let min_t = getT(fSD[3], 'minutes', 'minute');
    let sec_t = getT(fSD[4], 'seconds', 'second');
    
    let arr = [year_t, day_t, hour_t, min_t, sec_t];
    let f_arr = arr.filter((v) => v.length > 0);
    if (f_arr.length > 1) {
        const last = f_arr.pop();
        return f_arr.join(', ') + ' and ' + last;
    }
    return f_arr;
}
//console.log(formatDuration(1649007539));
