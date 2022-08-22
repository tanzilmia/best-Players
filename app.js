
// global veribal

let Orderlist = document.getElementById('list');
let perPlayecost = document.getElementById('perPlayer_cost');
let playerExpence = document.getElementById('player_expence');
let totalCost = document.getElementById('total_cost');
// buttons select
let Calculetbtn = document.getElementById('player_calculet');
let totalCalculetbtn = document.getElementById('total_calculet');
// a functio for btn click
function btnClick(btn){
    let players = btn.parentNode.children[0].innerText
    let li = document.createElement('li')
    Orderlist.appendChild(li)
    let ListLength = Orderlist.children.length
    if(ListLength >=6){
        li.remove()
        alert('you can select just 5 players')
    }else{
        li.innerText = players
        btn.setAttribute('disabled', '');
    }
}

// string to value convertion 

function convertStrToValue(elemnt){
    let inputValue = document.getElementById(elemnt)
    let playerValue = parseInt(inputValue.value)
    return playerValue
}



// calculation for palyers -----
Calculetbtn.addEventListener('click',function(){
    let TotalPlayers = Orderlist.children.length
    let playerCost = convertStrToValue('perPlayer_cost')
    let cost = TotalPlayers * playerCost
    // show value on the main part
    playerExpence.innerText = cost
})
// final calculation ------
totalCalculetbtn.addEventListener('click',function(){
    let playerExpen = parseInt(playerExpence.innerText)
    let managerCost = convertStrToValue('manager_cost')
    let coachCost = convertStrToValue('Coach_cost')
    let total = playerExpen + managerCost + coachCost
    // shwo total 
    totalCost.innerText = total
})











































































