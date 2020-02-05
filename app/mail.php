<?php


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$other = $_POST['user_other'];


//отправка заявки на почту

// $to = "ТУТ_ПОЧТОВЫЙ АДРЕС";
$subject ='Заявка с сайта SiteName';
$message = "Имя: $name, Номер телефона $phone , доп инфа: $other";


// отправка на почту


$success = mail($to,$subject,$message, "Content-type: text/plain; charset=\"utf-8\"\n");

if ($success) {

    echo "Заявка успешно отправлена!";
    
else {

    echo "Ошибка при выполнении запроса. ";
}
    
}





