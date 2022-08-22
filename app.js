// a functio for btn click

function btnClick(btn){
    let players = btn.parentNode.children[0].innerText
    let Orderlist = document.getElementById('list')
    let li = document.createElement('li')
    Orderlist.appendChild(li)
    let ListLength = Orderlist.childNodes.length -1
    if(ListLength >=6){
        li.style.display ='none'
        alert('you can select just 5 players')
    }else{
        li.innerText = players
        btn.setAttribute('disabled', '');
    }
}









































































