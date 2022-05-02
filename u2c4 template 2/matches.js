// write js code here corresponding to matches.html
var favourites = JSON.parse(localStorage.getItem("favourite")) || [];
function MatchData(data){
        document.querySelector("tbody").innerHTML="";
        data.forEach(function(elem){
        var tr = documnet.createElement("tbody");

        var tr = documnet.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.MatchNumber;

        var td2 = document.createElement("td");
        td2.innerText = elem.FirstTeam;

        var td3 = document.createElement("td");
        td3.innerText = elem.SecondTeam;

        var td4 = document.createElement("td");
        td4.innerText = elem.MatchDate;

        var td5 = document.createElement("td");
        td5.innerText = elem.MatchVenue;

        var td6 = document.createElement("td")
        td6.innerText = "favourites";
        td6.style.color = "red";
        td6.addEventListener("click",function(){
            Favourites(elem);;
        });
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    });

    function Favourites(elem){
        console.log(elem)
        Favourites.push(elem);
        localStorage.setItem("favourite",JSON.stringify(Favourites));
    }
}