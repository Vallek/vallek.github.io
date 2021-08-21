let boxItems = document.querySelectorAll('.box-item');
let a = []; 

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
				return boxSide;
			}
		}
		
		window.addEventListener('resize', getSizes);

		function passSizes(param) {
			return param;
		}
		passSizes(getSizes());
		let x = passSizes(getSizes());
		a.push(x);
		console.log(a);

		function showPopup() {
			if (
				target !== null &&
				a != undefined
			) {
				target.classList.remove('visually-hidden');
				target.classList.add('inside-viewport');
				let y = a[a.map(x => x * 2)];
				target.style.left = y + 'px';
				console.log(y);
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