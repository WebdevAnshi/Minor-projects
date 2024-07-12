
const showdetails = document.querySelector(".showdetails");

let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
let apiKey = "0de73a6f40df4ea78c063b8130e5a343";

const getusercurrentaddress = async (latitude, longitude) => {
    let query = `${latitude},${longitude}`;
    let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

document.querySelector(".geo-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                showdetails.textContent = `The latitude is ${latitude} & longitude is ${longitude};
                getusercurrentaddress(latitude, longitude)`;
            },
            (error) => {
                showdetails.textContent = error.message;
            }
        );
    }
});








// const showdetails = document.querySelector(".showdetails");

// let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
// let apiKey = "0de73a6f40df4ea78c063b8130e5a343";


// const getusercurrentaddress = (latitude, longitude) => {
//     console.log(latitude, longitude);
// };

// document.querySelector(".geo-btn").addEventListener("click", () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 showdetails.textcontent = `the latitude ${latitude} & ${longitude}`;
//                 getusercurrentaddress(latitude, longitude) => {
//                     let query = `${latitude}, ${longitude}`;
//                     let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`;
//                     try {
//                         const res = await fetch(apiUrl);
//                         const data = await res.json();
//                         console.log(data);
//                     } catch (error) {
//                         console.log(error);
//                     }
//                 };
//             };
//             (error) => {
//                 showdetails.textcontent = error.message;
//             }
//         )
//     }
// })










// // document.querySelector(".geo-btn") .addEventListener("click" , () =>{
// //     if(navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(
// //             (position) => {
// //                 // console.log(position.coords.latitude);
// //                 const {latitude, longitude} = position.coords;
// //                 showdetails.textContent = ` the latitude ${latitude} & longitude ${longitude}`;
// //             },
// //             (error) => {
// //                 showdetails.textContent = error.message;
// //                 console.log(error.message);
// //             }
// //         )
// //     }
// // })