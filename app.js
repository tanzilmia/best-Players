// get all global veriable 
let perPlayerCost = document.getElementById('perPlayer_cost');
let Orderlist = document.getElementById('list');
let perPlayecost = document.getElementById('perPlayer_cost');
let playerExpence = document.getElementById('player_expence');
let managerCost = document.getElementById('manager_cost');
let CoachCost = document.getElementById('Coach_cost');
let totalCost = document.getElementById('total_cost');
// buttons select
let Calculetbtn = document.getElementById('player_calculet');
let totalCalculetbtn = document.getElementById('total_calculet');





// a functio for btn click
function btnClick(btn){
    let players = btn.parentNode.children[0].innerText
    let li = document.createElement('li')
    Orderlist.appendChild(li)
    let ListLength = Orderlist.childNodes.length -3
    if(ListLength >=6){
        li.style.display ='none'
        alert('you can select just 5 players')
    }else{
        li.innerText = players
        btn.setAttribute('disabled', '');
    }
}













































































