//Находим элементы формы по их классам
const fullname = document.querySelector('.fullname');//Поле ввода ФИО
const username = document.querySelector('.chat');//место для отображения имени
const profilePic = document.querySelector('.profile-picture');//поле ввода ссылки на аватар
const userphoto = document.querySelector('.user-photo');//место для отображения аватара
const button = document.querySelector('.btn');//кнопка отправки комментария


//Вешаем обработчик события на кнопку "Отправить" 
button.addEventListener('click', () =>{ 
//Разбиваем введённое ФИО на отдельные части по пробелам
const nameParts = fullname.value.split(" ");
let fullNameNew = "";
//Проходимся циклом по всем частям ФИО
    for (let i=0;i < nameParts.length; i++){
        //Если длинна части больше нуля, то это не пробел, а часть ФИО
        if (nameParts[i].length > 0){
            //Формируем новую строку ФИО с заглавной буквой у каждой части 
            fullNameNew +=
            nameParts[i][0].toUpperCase() +
            nameParts[i].substring(1).toLowerCase() + " ";
        }
    }
    //Отображаем ФИО в месте для комментариев 
    username.textContent = fullNameNew.trim();
    
    //Отображаем аватар в месте для комментариев 
    userphoto.innerHTML = `<img class="user-photo" src=${profilePic.value} alt="profile-picture" />`;
    
    //Получаем введенный комментарий и заменяем слово "viagra" на "***"
    const comment = document.querySelector(".message").value;
    const filteredComment = comment.replace(/viagra/gi, "***");

    //Отображаем отфильтрованный комментарий в месте для комментариев 
    const textarea = document.querySelector('.chat-box');
    textarea.value = filteredComment;

    //Отображаем дату и время в месте для комментариев 
    const d = new Date();
    let text = d.toDateString() + ' ' + 'at' + ' ' + d.toTimeString();
    document.querySelector('.time').innerHTML = text;

    //Все случайные аватарки вводим в условие
if (profilePic.value === '') {
    const anyPic = [ 
        'https://cdn-icons-png.flaticon.com/512/3135/3https://cdn4.sharechat.com/img_467054_855c14b_1677775143880_sc.jpg135715.png',
        'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Cute-DP-for-Whatsapp.jpg',
        'https://e0.pxfuel.com/wallpapers/434/602/desktop-wallpaper-aesthetic-pfp-aesthetic-profile-pic.jpg',
        '/week12-JS/img/cat4.pnghttps://cdn.statusqueen.com/dpimages/thumbnail/cute_dp_image-3100.jpg',
        'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Happy-Whatsapp-DP-Pics-Download-203.jpg',
        '/week12-JS/img/cat6.pnghttps://cdn2.sharechat.com/img_708524_22b9df46_1674145705296_sc.jpg',
    ];
    let randomPic = anyPic[Math.floor(Math.random() * anyPic.length)];
userphoto.innerHTML = `<img src= ${randomPic} alt="profile-picture">`;
} else{
    userphoto.innerHTML = `<img class="user-photo" src=${profilePic.value} alt="profile-picture" />`;
};

//Условие для неуказанного ФИО, как "username" в чате
if (fullname.value === ''){
    username.textContent = "username";
}

});

//Checkbox позволяющий скрыть поле ввода ФИО
let checkBox = document.getElementById("clickNo");
    clickNo.addEventListener('change', function(){// function allows to hide the user's name
        let inputHidden = document.getElementById("inputbox");
        if (clickNo.checked){
            inputHidden.style.display = "none";
        } else {
            inputHidden.style.display = "block";
        }
    });

