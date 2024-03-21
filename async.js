 console.log("start");
// setTimeout(()=>{
//     console.log("first timeout");
// },2000); //ini menunggu waktu eksekusinya
 console.log("end");

let users =
        [{
        email:"dita@gmail.com",
        password:"password"
        }, ];

function register1(newUser, callback){
    setTimeout(()=>{
        users.push(newUser)
        callback();
    },2000)
}
function register(newUser){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let error = 0;
        if(error){
            reject("register failed!");
        }
        else{
            users.push(newUser);
            resolve();
        }
        },2000);
    });
}

function getUsers(){
    return new Promise((res, rej)=>{     
        setTimeout(()=>{
            let error =0
            if(error){
                rej("error");
            }
            else{
                res(users);
            }
        },1000)
    })
}
const newUser={
    email :"user01@gmail.com",
    password : "pass"
}

//pemanggilan menggunakan callback
// register(newUser, getUsers)
// console.log("batas");
// getUsers();

//pemanggilan dengan promise
//  register(newUser)
//         .then(()=>{
//          getUsers()
//          .then((data)=>{(
//          console.log(data)); //ditambah ini karena get usernya pakai promise
//          let fetchuser =data;
//         })
//          .catch((err)=>console.log(err))//catch ini untuk yang register
//          .catch(error=>console.log(error))
//          .finally(()=> console.log("end function get"));
//         })
//         .catch(error=>console.log(error))
//         .finally(()=> console.log("end function regis"));

        register(newUser)
         .then(() =>getUsers())
         .then((data)=>console.log(data))
         .catch((error)=>console.log(error))
         .finally(()=> console.log("end function regis"));
//     // .then(data=>console.log(data)) //ditambah ini karena get usernya pakai promise
     



//assign-await
async function main(){
    try{
        await register(newUser)
        let result = await getUsers()
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("close connection");
    }
}
// main()


// fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(response => response.json())
//       .then(json => console.log(json, "json"))



// console.log("batas");
// getUsers();

