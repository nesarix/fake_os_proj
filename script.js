let modalJS = document.getElementById("modal");
let modalTitle = document.getElementById("modal__fileTitle");
let modalDetails = document.getElementById("modal__fileDetails");
let btnMacpaint = document.getElementById("openModalImg1");
let btnShopList = document.getElementById("openModalList");
let btnTrash = document.getElementById("openModalTrash");
//click events for my modal
btnMacpaint.addEventListener("click", openPaintVersion);
//window.addEventListener("click", closeModal);
btnShopList.addEventListener("click", openListVersion);
btnTrash.addEventListener("click", openTrashVersion);
function openPaintVersion() {
	if (modalJS.style.display !== "block") {
		modalJS.style.display = "block";
		modalTitle.innerText = "macpaint";
		const paint = document.createElement("img");
		paint.src = "./images/00_screenshot.png";
		paint.style.width = "inherit";
		paint.style.height = "inherit";
		document.querySelector(".modal").appendChild(paint);
	}
}
function openListVersion() {
	if (modalJS.style.display !== "block") {
		modalJS.style.display = "block";
		modalTitle.innerText = "Shopping List";
		const unordList = document.createElement("ul");
		unordList.className = "ul";
		let liItems = document.createElement("li");
		liItems.innerText = "chicken nuggets";
		document.querySelector(".modal").appendChild(unordList);
		document.querySelector(".ul").appendChild(liItems);
		liItems = document.createElement("li");
		liItems.innerText = "lettuce";
		document.querySelector(".ul").appendChild(liItems);
		liItems = document.createElement("li");
		liItems.innerText = "bread rolls";
		document.querySelector(".ul").appendChild(liItems);
	}
}

function openTrashVersion() {
	if (modalJS.style.display !== "block") {
		modalJS.style.display = "block";
		modalTitle.innerText = "Trash";
		const vid = document.createElement("video");
		vid.src = "./images/trash black and white.mp4";
		vid.type = "video/mp4";
		vid.style.width = "inherit";
		vid.style.height = "inherit";
		vid.setAttribute("autoplay", "");
		vid.setAttribute("loop", "");
		document.querySelector(".modal").appendChild(vid);
	}
}
function closeModal(e) {
	if (e.target == modalJS) {
		modalJS.style.display = "none";
	}
}
