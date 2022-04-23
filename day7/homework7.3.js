axios.get("homework1-4.json").then(function(response){
    let data = response.data;
    //console.log(data);
    let maleFilter = data.filter(x => x.gender == "male");
    //console.log(maleFilter);
    let friendFilter = maleFilter.filter(y => y.friends.length >= 2);
    //console.log(friendFilter);
    let requestFilter = friendFilter.filter(z => z.name);
    let display = requestFilter.map(obj => {
        return {
            name: obj.name, 
            gender: obj.gender, 
            company: obj.company, 
            email: obj.email, 
            friends: obj.friends, 
            balance: parseFloat(obj.balance.replace("$","").replace(",","")/10).toString()
        }
    });
    
     console.log("after filter: ", display);
    let addSign = display.map(sign => "$" + sign.balance);
    console.log(addSign);

    tableData(display);

   
    
    function tableData (display){
        const sum = document.getElementById("result");      //สั่งให้เอาข้อมูลด้านล่างไปใส่ใน id = "result"
        let dataHtml = '';
        for (let data of display){
            let displayFriend = data.friends.map(p =>
             `<div>${p.name}</div>` //division use to display single element
            ).join('')              //ถ้าไม่มี .join เครื่องหมาย , จะไม่หายไป เพราะมันจะมองเป็นทั้งก้อน
            dataHtml += `<tr>
                        <td>${data.name}</td>
                        <td>${data.gender}</td>
                        <td>${data.company}</td>
                        <td>${data.email}</td>
                        <td>${displayFriend}</td>
                        <td>${"$" +data.balance}</td>
                        </tr>`
        }
        console.log(dataHtml);
        sum.innerHTML = dataHtml;
    }
    

})