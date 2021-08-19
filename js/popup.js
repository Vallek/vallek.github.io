let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(
	function changeOnHover(el) {
		
		let target = el.querySelector('.info');
		let heading = el.querySelector('.box-item__heading');
		let itsCode = el.classList.contains("always-show");
		el.addEventListener('mouseenter', showPopup);
		el.addEventListener('mouseleave', hidePopup);
		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);

		function getSizes() {
			let boxSide = el.offsetWidth;
			let viewportWidth = window.innerWidth;
			let rightSide = viewportWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			if (
				target !== null &&
				viewportWidth >= 800 &&
				rightSide >= boxSide ||
				leftSide >= boxSide
			) {
				console.log('aaa');
				return boxSide;
			}
		}

		window.addEventListener('resize', getSizes);

		function passSizes(param) {
			return param;
		}

		let a = [];
		a.push(passSizes(getSizes()));

		function showPopup() {
			if (
				target !== null &&
				a != undefined
			) {
				target.classList.remove('visually-hidden');
				target.classList.add('inside-viewport');
				target.style.left = a + 'px';
			}
			else {
				return;
			}
		}
		
		function hidePopup() {
			if (target !== null) {
				target.classList.remove('out-of-viewport');
				target.classList.remove('inside-viewport');
				target.style.left = null;
				target.style.right = null;
				target.classList.add('visually-hidden');
			}
			else {
				return;
			} 
		}

		if (target !== null) {
			let removeIt = function remove() {	
				target.classList.add('visually-hidden');	
				target.style.left = null;
				target.style.right = null;
			};
			target.addEventListener('mouseover', removeIt);
		}
		else {
			return;
		}	

		function onBox() {
			if (! itsCode) {
				heading.classList.remove('visually-hidden');
			}
			else {
				return;
			}
		}

		function outBox() {
			if (! itsCode) {
				heading.classList.add('visually-hidden');
			}
			else {
				return;
			}
		}

	}
);