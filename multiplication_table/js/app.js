let html = "";
for (i = 1; i <= 9 ; i++) {
    html += "<tr>";
    for (j = 2; j <= 9 ; j++) {
        html += "<td>" + j + "X" + i + "=" + j * i + "</td>";
    }
    html += "</tr>";
}
document.getElementById("content").innerHTML = html;
