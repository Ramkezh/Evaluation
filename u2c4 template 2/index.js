// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",Addmatch);
 var MatchDetails = JSON.parse(localStorage.getItem("Addmatch")) || [];
function Addmatch(){
    event.preventDefault();
    var MatchObj = {
        MatchNumber : document.querySelector("#matchNum").value, 
        FirstTeam : document.querySelector("#teamA").value,
        SecondTeam : document.querySelector("#teamB").value,
        MatchDate : document.querySelector("#date").value,
        MatchVenue : document.querySelector("#venue").value
    };
    MatchDetails.push(MatchObj);
    console.log(MatchDetails);
    localStorage.setItem("Addmatch",JSON.stringify(MatchDetails));
    window.location.href = "matches.html";
}