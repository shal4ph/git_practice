//date object; document object manipulation

let today = new Date();
console.log(today);
// console.log(today.getHours());
// console.log(today.getTime());
// console.log(Date.now());
// let endDate = new Date('2020-02-20 16:30:00');
// console.log(endDate);
// console.log(today.getTime());
// console.log(today.getFullYear());
// console.log(endDate.getFullYear()-today.getFullYear());

let date = new Date("2020-05-20 17:45:30");
//5/20/2020
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
//may 20, 2020
const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
};

const formattedDate = date.toLocaleString("en-US", options);
const formattedDate1 = date.toLocaleString("en-US", timeOptions);
console.log(formattedDate);
console.log(formattedDate1);

