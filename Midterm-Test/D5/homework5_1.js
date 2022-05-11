axios.get('https://reqres.in/api/users')
    .then(function (response) {
        const aUser = response.data.data;
        console.log(aUser);
        let str = '';
        for (let i=0; i<aUser.length; i++) {
            let contentDisplay = document.getElementById("content");
            str += `
            <div class="col">
                <span class='bold'>${aUser[i].first_name}</span><br>
                ${aUser[i].email}<br>
                <img src='${aUser[i].avatar}'>
            </div>
            `;
            contentDisplay.innerHTML = str;
        }
        
        
    })
    document.getElementById('content').innerHTML = str;