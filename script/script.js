//JS - nav bar
function showOderView(){
    document.getElementById("orderView").style.display = "block";
    document.getElementById("manageView").style.display = "none";
    document.getElementById("historyView").style.display = "none";
}

function showManageView(){
    document.getElementById("orderView").style.display = "none";
    document.getElementById("manageView").style.display = "block";
    document.getElementById("historyView").style.display = "none";
}

function showHistoryView(){
    document.getElementById("orderView").style.display = "none";
    document.getElementById("manageView").style.display = "none";
    document.getElementById("historyView").style.display = "block";
}