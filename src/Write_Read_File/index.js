const fs = require('fs');


// (const testObject = {
//     name: "Tanmoy paul",
//     age: "22",
//     address: {
//         "city": "Dhaka",
//         country: "bd"
//     }
// }
// const data = JSON.stringify(testObject);

// fs.writeFile("test.json", data, (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Data Write Successful")
//     }
// }))

fs.readFile('./test.json', (error, data) => {
    if (error) {
        console.log(error);
    }

    let obj = JSON.parse(data);
    console.log(obj);
})