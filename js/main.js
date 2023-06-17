window.onload = function () {
	//彈跳視窗按紐
	const linkBtns = document.querySelectorAll('.link-btn');
	linkBtns.forEach((btn) => {
		btn.src = 'img/link-solid.svg';
		btn.addEventListener('click', openLinkWrap);
	})
	
	//關閉彈掉視窗按紐
	const closeBtns = document.querySelectorAll('.close-btn');
	closeBtns.forEach((btn) => {
		btn.addEventListener('click', closeLinkWrap);
	})
	
	//切換照片按紐
	const switchBtns = document.querySelectorAll('.switch-btn');
	switchBtns.forEach((btn) => {
		btn.addEventListener('click', switchNextPage);
	})
	
	//圖片超連結
	const photos = document.querySelectorAll('.photo-object > .photo-img');
	photos.forEach((photo) => {
		photo.addEventListener('click', openPhoto);
	})
	
}

/**
 * 開啟彈跳視窗
 */
function openLinkWrap(){
	const id = this.dataset.id;
	if(id != null) {
		const wrap = document.querySelector(`.flow-cover[data-id='${id}']`);
		wrap.classList.remove('hidden-wrap');
	}
}

/**
 * 關閉彈跳視窗
 */
function closeLinkWrap() {
	const wraps = document.querySelectorAll(`.flow-cover`);
	wraps.forEach((wrap) => {
		wrap.classList.add('hidden-wrap');
	})	
}

/**
 * 切換照片
 */
function switchNextPage() {
	const photoWrap = this.parentNode.querySelector('.photo-wrap');
  if(photoWrap == null) return;
  const type = this.dataset.type;
  const children = photoWrap.children;
  const index = parseInt(photoWrap.dataset.index);
  const maxIndex = children.length - 1;
  let newIndex = 0;
  if(type == 'left') {
  	newIndex = index <= 0 ? maxIndex : index - 1;
  }
  else {
  	newIndex = index >= maxIndex ? 0 : index + 1;
  }

  photoWrap.dataset.index = newIndex;
  Array.from(children).forEach((child, i) => {
  	if(i == newIndex){
    	child.classList.remove('hide');
    }
    else {
    	child.classList.add('hide');
    }
  })
}

/**
 * 另開照片視窗
 */
function openPhoto(){
	const url = this.src;
	window.open(url, '_blank');
}