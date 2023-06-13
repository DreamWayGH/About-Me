window.onload = function () {
	const linkBtns = document.querySelectorAll('.link-btn');
	linkBtns.forEach((btn) => {
		btn.src = 'img/link-solid.svg';
		btn.addEventListener('click', openLinkWrap);
	})
	
	const closeBtns = document.querySelectorAll('.close-btn');
	closeBtns.forEach((btn) => {
		btn.addEventListener('click', closeLinkWrap);
	})
}

function openLinkWrap(){
	const id = this.dataset.id;
	if(id != null) {
		const wrap = document.querySelector(`.flow-cover[data-id='${id}']`);
		wrap.classList.remove('hidden-wrap');
	}
}

function closeLinkWrap() {
	const wraps = document.querySelectorAll(`.flow-cover`);
	wraps.forEach((wrap) => {
		wrap.classList.add('hidden-wrap');
	})	
}