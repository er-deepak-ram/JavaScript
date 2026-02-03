// console.log(Temporal.Now.instant()); Will be available in future versions of JS

let myDate = new Date();
console.log(typeof myDate); // object

console.log(myDate); // 2026-01-10T06:13:05.496Z
console.log(myDate.toString()); // Sat Jan 10 2026 11:43:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Jan 10 2026
console.log(myDate.toTimeString()); // 11:51:21 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 10/1/2026, 11:49:45 am
console.log(myDate.toLocaleDateString()); // 10/1/2026
console.log(myDate.toLocaleTimeString()); // 11:50:35 am
console.log(myDate.toISOString()); // 2026-01-10T06:16:37.766Z
console.log(myDate.toJSON()); // 2026-01-10T06:17:43.759Z

let customDate = new Date(2025, 0, 15);
console.log(customDate.toDateString()); // Wed Jan 15 2025. Month in JS starts from 0

customDate = new Date(2025, 0, 15, 5, 15);
console.log(customDate.toLocaleString()); // 15/1/2025, 5:15:00 am
customDate = new Date("2025-01-16");
console.log(customDate.toLocaleString()); // 16/1/2025, 5:30:00 am (When date given in string format, it takes UTC time by default 
                                          // and month starts from 1 here)
customDate = new Date("11-01-2026");
console.log(customDate.toLocaleString()); // 1/11/2026, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1768102621363 (Milliseconds from 1 Jan 1970 to now)
console.log(customDate.getTime()); // 1793471400000 (Converting date to timestamp which is milliseconds from 1 Jan 1970 to that date)
console.log(Math.floor(Date.now() / 1000)); // 1768102749 (converting milliseconds to seconds)

let today = new Date();
console.log(today); // 2026-01-11T03:42:31.979Z
console.log(today.getMonth()); // 0 (Month starts from 0)
console.log(today.getDay()); // 0 (Day of week starts from Sunday as 0)

// customizing the date
today = today.toLocaleString('default', { weekday: 'long', }); // "Sunday"
console.log(today); // Sunday



