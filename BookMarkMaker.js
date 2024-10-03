let formEl = document.getElementById("bookmarkForm");
let nameInput = document.getElementById("siteNameInput");
let urlInput = document.getElementById("siteUrlInput");

let nameErr = document.getElementById("siteNameErrMsg");
let urlErr = document.getElementById("siteUrlErrMsg");
let buttonEl = document.getElementById("submitBtn");

let container = document.getElementById("bottomContainer");
let unordercontainer = document.getElementById("bookmarksList");
nameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErr.textContent = "Required*";
        nameErr.style.color = "#dc3545";
    } else {
        nameErr.textContent = "";
    }
});

urlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErr.textContent = "Required*";
        urlErr.style.color = "#dc3545";
    } else {
        urlErr.textContent = "";
    }
});

buttonEl.addEventListener("click", function() {

    unordercontainer.classList.add("bottom-container", "m-4", "p-4");
    container.appendChild(unordercontainer);

    let list = document.createElement("li");
    list.classList.add("listed");
    unordercontainer.appendChild(list);

    let para = document.createElement("p");
    para.textContent = nameInput.value;
    para.classList.add("para1");
    list.appendChild(para);

    let anchor = document.createElement("a");
    anchor.setAttribute("target", "_blank");
    anchor.textContent = urlInput.value;
    anchor.href = urlInput.value;
    list.appendChild(anchor);


})



formEl.addEventListener("submit", function(event) {
    event.preventDefault();
});