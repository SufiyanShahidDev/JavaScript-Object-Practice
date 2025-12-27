

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

// console.log("js is running -->")

// let myObj = {
//     name : "hasan"
// }

// let myArr = ["bilal", "hasan"]

// console.log(myArr[1])


// let obj = {
//     fullName : "Muhammad Hasan",
//     skills : ["HTML", "CSS", "Javascript", "GitHub", "Bootstrap", "Animation"]
// }


// let myWindow ={
//     myAlert : function (){
//         alert("mai chlaa -->")
//         return "kuch b"
//     }
// }

// console.log(myWindow.myAlert())


// let mobilePkg= {
//     basic : {
//         price : 200,
//         duration :"monthly",
//         data : "2GB"

//     },
//     professional :{
//          price : 2000,
//         duration :"monthly",
//         data : "200GB"
//     },
//     ultimate : {
//          price : 5000,
//         duration :"monthly",
//         data : "200GB",
//         sharing:"5 Person"
//     }
// }

// // console.log("Mobile Packages Obj -->",mobilePkg.basic.price)
// alert("Mobile Packages mai sai basic package ki ye price hai:" + mobilePkg.basic.price)




let newObject = {
    username : "Sufiyan",
    fatherName : "Shahid",
    course : "I am learning web development from SMIT and I have learned many things from this course.",
    CNIC : 422013434545
}

let studentName = document.getElementById("title").innerText = "Fullname: " + newObject.username + " " + newObject.fatherName;

let myPara = document.getElementById("para").innerText = newObject.course