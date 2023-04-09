//Переменные всех элементов
const fullname = document.querySelector('.fullname');
const username = document.querySelector('.chat');

const profilePic = document.querySelector('.profile-picture');
const userphoto = document.querySelector('.user-photo');

const button = document.querySelector('.btn');


button.addEventListener('click', () =>{ 

    //интерфейс преобразования имени с помощью массива
    const arr = (fullname.value).split(" ");
    const ArrUpp =[];
    for (let i=0;i < arr.length; i++){
        ArrUpp.push(arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase());
    };
    let fullnameNew = ArrUpp.join(' ');

    //Выводим ФИО в чат
    username.textContent =`${fullnameNew}`;

    //Выводим аватар (profilePic) в чат
    userphoto.innerHTML = `<img class="user-photo" src=${profilePic.value} alt="profile-picture" />`;

    //Ставим фильтр
    const string = "Hi, buy viagra now";// Hi, buy viagra now
    let word = string.replace(/viagra/gi,"***");
    const textarea = document.querySelector('.chat-box');
    textarea.value = word;
})







