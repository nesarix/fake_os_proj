let modalJS = document.getElementById("modal");
let modalTitle = document.getElementById("modal__fileTitle");
let btnMacpaint = document.getElementById("openModalImg1");
let btnShopList = document.getElementById("openModalList");
let btnTrash = document.getElementById("openModalTrash");
let toClearModal = document.getElementById("clearInside");
let menuModalJS = document.getElementById("menuModal");
let fileClickMenu = document.getElementById("fileOpen");
let fileCloseOption = document.getElementById("fileClose");
//click events
//btnMacpaint.addEventListener("click", openPaintVersion);
btnShopList.addEventListener("click", openListVersion);
btnTrash.addEventListener("click", openTrashVersion);
fileClickMenu.addEventListener("click", fileMenu);

setInterval(clock, 1000);
clock();

function openPaintVersion() {
	if (modalJS.style.display !== "block") {
		modalJS.style.display = "block";
		modalTitle.innerText = "macpaint";
		const paint = document.createElement("img");
		paint.src = "./images/00_screenshot.png";
		paint.style.width = "inherit";
		paint.style.height = "inherit";
		document.querySelector(".clearInside").appendChild(paint);

		document.addEventListener(
			"click",
			() => {
				modalJS.style.display = "none";
			},
			{ once: true, capture: true }
		);
	}
}

// so like the image just hecks off with this and i cant figure out why lmao
// const openPaintVersion = () => {
// 	if (modalJS.style.display !== "block") {
// 		modalJS.style.display = "block";
// 		modalTitle.innerText = "macpaint";
// 		const paint = document.createElement("img");
// 		paint.src = "./images/00_screenshot.png";
// 		paint.style.width = "inherit";
// 		paint.style.height = "inherit";
// 	}
// };
btnMacpaint.addEventListener("click", openPaintVersion);
function openListVersion() {
	if (modalJS.style.display !== "block") {
		modalJS.style.display = "block";
		modalTitle.innerText = "Shopping List";
		const unordList = document.createElement("ul");
		unordList.className = "ul";
		let liItems = document.createElement("li");
		liItems.innerText = "chicken nuggets";
		document.querySelector(".clearInside").appendChild(unordList);
		document.querySelector(".ul").appendChild(liItems);
		liItems = document.createElement("li");
		liItems.innerText = "lettuce";
		document.querySelector(".ul").appendChild(liItems);
		liItems = document.createElement("li");
		liItems.innerText = "bread rolls";
		document.querySelector(".ul").appendChild(liItems);
		document.addEventListener(
			"click",
			() => {
				modalJS.style.display = "none";
			},
			{ once: true, capture: true }
		);
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
		vid.setAttribute("controls", "");
		document.querySelector(".clearInside").appendChild(vid);
		document.addEventListener(
			"click",
			() => {
				modalJS.style.display = "none";
			},
			{ once: true, capture: true }
		);
	}
}
function clock() {
	let day = new Date();
	let time = day.getHours() + ":" + day.getMinutes();
	document.getElementById("clock").innerText = time;
}
function fileMenu() {
	if (menuModalJS.style.display !== "block") {
		menuModalJS.style.display = "block";
		document.addEventListener(
			"click",
			() => {
				menuModalJS.style.display = "none";
			},
			{ once: true, capture: true }
		);
	}
}

const clearModal = () => {
	if (modalJS.style.display === "none") {
		toClearModal.replaceChildren();
	}
};
setInterval(clearModal, 500);
