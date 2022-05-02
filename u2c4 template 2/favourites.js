// write js code here corresponding to favourites.html
var Favourites = JSON.parse(localStorage.getItem("favourite"));
displayData(Favourites);

function MatchData(data) {
  data.forEach(function (elem, index) {
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

    var td6 = document.createElement("td");
    td6.innerText = "Delete";
    td6.setAttribute("class", "deleteText");
    td6.addEventListener("click", function () {
      deleteItem(elem, index);
    });

    tr.append(td1, td2, td3, td4, td5);

    document.querySelector("tbody").append(tr);
  });
}
