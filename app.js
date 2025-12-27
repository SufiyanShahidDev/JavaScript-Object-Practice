

// let obj = {
//     name: "Sufiyan"
// };

// console.log(obj.name);

// let myObj = {
//     myalert : function(){
//         alert("running");
//         return
//     }
// }

// console.log(myObj.myalert());

let newObject = {
    username : "Sufiyan",
    fatherName : "Shahid",
    course : "I am learning web development from SMIT and I have learned many things from this course.",
    CNIC : 422013434545
}

let studentName = document.getElementById("title").innerText = "Fullname: " + newObject.username + " " + newObject.fatherName;

let myPara = document.getElementById("para").innerText = newObject.course