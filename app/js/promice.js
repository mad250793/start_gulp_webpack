const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve()
    }, 2000);

})
//выполняем когда промис выполнен и успешно
p.then(() => {
    console.log("promice start");
})

//выполняем когда промис не выполнен или произошла ошибка 
.catch((e) => {
    console.log("error");
})
