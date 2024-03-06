var productCon = document.getElementById("product")
var search = document.getElementById("search")
var pro = productCon.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    for (count = 0; count < pro.length; count = count + 1) {
        var prodcutname = pro[count].querySelector("p").textContent
        if (prodcutname.toUpperCase().indexOf(entervalue) < 0) {
            pro[count].style.display = "none";
        }
        else {
            pro[count].style.display = "block";
        }

    }
})