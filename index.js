console.log("hello"); //untuk menampilkan atau print
{
    //scope 1
    var sapa = "halo apa kabar";
    let jawab = "kabar baik"; 
    const datenow ="2024-12-02";

    console.log(sapa);
    console.log(jawab);
    console.log(datenow);


    sapa = "lagi apa";
    jawab = "lagi ngoding";
    // datenow = "2024-13-02";


    console.log("batas");
    console.log(sapa);
    console.log(jawab);
    console.log(datenow);
}

{
    //scope 2
    console.log(sapa);
    // console.log(jawab); //not defined karena variabel let tidak bisa dipanggil di scope yang berbeda
    // console.log(datenow);
}

{
    //scope 3 tipe data
    //number
    let angka = 100;
    console.log(typeof angka);

    //string
    let teks = "bumi";
    console.log(typeof teks);

    //boolean
    let isActive = true;
    console.log(typeof isActive);

    //array
    let days = ["mon",1, "tue", "wed", "thu", "fri","sat", "sun"]; // bisa berbagai tipe data dalam satu array
    console.log(days);
    console.log(days[1]);

    //object bisa menyimpan multiple value: menyimpan key:value
    let book = {
        "judul":teks, 
        "stock":angka,
        isActive, //isActive : isActive dapat disingkat menjadi is active saja
    };
    console.log(book);
}
{
    let x = 10;
    let y = 15;
    if(x>y){
        console.log("x"+x +"lebih besar dari y" +y);
    }
    else if(x<y){
        console.log(`x: ${x} kurang dari y: ${y}`); //concat untuk dapat sekalian memanggil variabel, lebih sering digunakan
    }
    else{
        console.log("x sama dengan y");
    }


    // 1 === "1" ->false
    //1 == "1" -> true
    //data dari inputan contoh 
    let users =
        [{
        email:"dita@gmail.com",
        password:"password"
        }, ];

    function login(callback,userInput){
        if(users.length >0){
            console.log("user found!");
            users.forEach(user => {
                if(user.email == userInput.email && user.password == userInput.password){
                    console.log("success login");
                    if(user.password !="password"){
                        console.log("wrong password");
                    }
                }
                else{
                    console.log("email is not found, please sign up");
                    callback(userInput);
                }
            });
            
        } 
    }
    function register(user){
        users.push(user);
    }
    let newUser={
        email : "dita02@gmail.com",
        password : "pass"
    }
    
    login(register,newUser);
    console.log(users);

    if(users.length <= 0){
        console.log("user not found!");
        register({
            email: "dita01@gmail.com",
            password:"pass"
        });
    } 


    for(let i =100;i>=75;i--){
        if(i%2===0){
            console.log(i);
        }
    }

    //rekrusif
    function faktorial(angka){
        if(angka===1 || angka ===0){
            return 1;
        }
        return angka*faktorial(angka-1)
    }
    console.log(faktorial(5));



    //spread operator
    const arr1 =[1,2,3]
    const arr2 =[4,5,6]
    const arr3 = [...arr1,...arr2];
    console.log(arr3);

    let book = [{
        "judul":"bumi", 
        "stock":10,
        isActive:true,
    }, {"judul":"matahari", 
        "stock":3,
        isActive:true,}];
    const updatebook={...book[0],judul:"bulan", stock:9}
    console.log(updatebook);

    //destrukturing
    const {judul,stock,isActive} = book[1]
    console.log(`judul : ${judul}`);
    console.log(`stock : ${stock}`);
    console.log(`status : ${isActive}`);


    let userData = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
      const{
        name:fullname, //ini untuk membuat alias atau nama lain
        username, 
        address:{street}, 
        company:{name:companyname}} = userData
    console.log(username);
    console.log(street);
    console.log(fullname);
    console.log(companyname);
}

{
    //return function
    function changeStatus(book, status){
        let updatebook={
            ...book,
            isActive:status
        }
        return updatebook;
    }

    //void fuction
    function changebook(book, status){
        let updatebook={
            ...book,
            isActive:status
        }
        console.log(updatebook);
    }

    let book = {
        "judul":"bumi", 
        "stock":10,
        isActive:true,
    };

   console.log(changeStatus(book,false)); //return function
   changebook(book,true); //void function
}