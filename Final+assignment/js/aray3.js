// let course=[
//     {"name": "Python", completedStatus:false},
//     {"name": "Java", completedStatus: true},
//     {"name": "C++", completedStatus: false},
//     {"name": "Javascript", completedStatus: true},
//     {"name": "MernStack", completedStatus: false},


// ];

// const completed=[]
// const incompleted=[]
// for (let index = 0; index < course.length; index++) {
//     const element = course[index];

//     if (element.completed)
// }

let countries = [
    {name: "India", countrycode:"In"},
    {name: "USA", countrycode:"Us"},
    {name: "UK", countrycode:"Uk"},
    {name: "Australia", countrycode:"Au"},
    {name: "Germany", countrycode:"Ge"},
    {name: "France", countrycode:"fr"},
    {name: "Japan", countrycode:"jp"},

]

const getCountryCode = (countryName)=>{
    let country= countries.find(
        (c)=>c.name.toLocaleLowerCase=== countryName.toLowerCase().trim());
    if(country){
        return country.countryCode;
    } else {
        return "country not found";
    }
};

console.log(getCountryCode("australia"));



const maskNumber = (accountNumber)=>{
    let StingNumber = accountNumber.toString();
    let lastFour = StingNumber.slice(-4);
    let maskedNumber= "x".repeat(StingNumber.length -4)

    return maskedNumber + lastFour;
}

const backAccountNumber = 1223455668788;
console.log(maskNumber(backAccountNumber));