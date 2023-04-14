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

    //
});


