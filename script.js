var url="https://619dc542131c600017089042.mockapi.io/user";
//read the data
function getData(){
    fetch(url)
     .then((result)=>result.json())
     .then((data)=>console.log(data))
     .then((err)=>console.log(err));
}
//getData();

//creat a data=>POST request

// function creatData(){
//     let data={
//         name:"Sita",
//         email:"sohan@gmail.com"
//     };

// fetch(url,{
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:{
//         "content-type":"application/json ;charset=UTF-8",
//     },
// })
// .then((result)=>result.json())
// .then((data)=>console.log(data))
// .then((err)=>console.log(err));
// }
//creatData();

//update the data=>put and patch request
//  function updateData(){
//      let data={
//      name:"Istakhar",
//      email:"Istakhar@gmail.com"
//      };
//       fetch(url + "/1",{
//           method:"PUT",
//           body:JSON.stringify(data),
//           headers:{
//               "content-type":"application/json; charset=UTF-8",
//           },
//       })
//       .then((result)=>result.json())
//       .then((data)=>console.log(data))
//       .catch((error)=>console.log(error));

//  }
 //updateData();

 //DELETE=> it is used to delete the data

 function deleteData(){
    
     fetch(url + "/2",{
         method:"DELETE",
         headers:{
             "content-type":"application/json; charset=UTF-8",
         },
     })
     .then((result)=>result.json())
     .then((data)=>console.log(data))
     .catch((error)=>console.log(error));

}
 deleteData();
