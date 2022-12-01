import fetch from 'node-fetch';

setTimeout(()=>{
    console.log('elf')
},2000) //2 saniye sonra fonksiyon çalışır.

setInterval(()=>{
    console.log('elf')
},1000) //durdurulmadığı takdirde her saniye çalışır.

const sayHi = (cb)=>{
    cb();
}

sayHi(()=>{
    console.log('Hellöööğ');
});

fetch("https://jsonplaceholder.typicode.com/users").
then((data)=>data.json()).
then((res)=>
console.log("Users Yüklendi.", res));

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
    console.log("Users Yüklendi.", users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((posts) => {
        console.log("Post Yüklendi.", posts);
        fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((data) => data.json())
        .then((posts2 ) => console.log("Post Yüklendi2.", posts2));
    });
});

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
        
    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

        console.log(users);
        console.log(post1);
        console.log(post2);
}

getData();

//Anonim Fonksiyon: direkt çalışır çağırılma gerektirmez. Aşağıdaki şekilde yazılır.
( async () => {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
        
    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

        console.log(users);
        console.log(post1);
        console.log(post2);
})();