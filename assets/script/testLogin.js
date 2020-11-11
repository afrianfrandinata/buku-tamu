const myForm = document.getElementById(myForm);

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new formData(this);
    const searchParams = new searchParams();

    for (const pair of formData) {
        searchParams.append(pair[0],[1])
    }

    fetch('testLogin.php', {
        method = 'post',
        body = searchParams
    }).then(function (respone){
        return respone.text();
    }).then(function (text){
        console.log(text);
    }).catch(function (error){
        console.error(error);
    })
});
