let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(
	function changeOnHover(el) {
		
		let target = el.querySelector('.info');
		let heading = el.querySelector('.box-item__heading');
		let itsCode = el.classList.contains("always-show");
		el.addEventListener('mouseenter', isInViewport);
		el.addEventListener('mouseleave', isOutViewport);
		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);
		target.addEventListener('mouseover', removeIt);

		// Show info popup on hover
		function isInViewport() {
			let boxSide = el.offsetWidth;
			let viewportWidth = window.innerWidth;
			let rightSide = viewportWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			if (
				target !== null &&
				rightSide >= boxSide &&
				viewportWidth >= 800
			) {
				target.classList.remove('visually-hidden');
				target.classList.add('inside-viewport');
				target.style.left = boxSide + 'px';
			}
			else {
				if (
					target !== null &&
					leftSide >= boxSide &&
					viewportWidth >= 800
					) {
					target.classList.remove('visually-hidden');
					target.classList.add('out-of-viewport');
					target.style.right = boxSide + 'px';
				}
				else if (target !== null) {
					target.style.left = null;
					target.style.right = null;
					return;
				} 
			}	
		}
		
		// Hide info popup on mouse out
		function isOutViewport() {
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
		
		// Hide info on self-hover
		function removeIt() {
			if (target !== null) {
					target.classList.add('visually-hidden');	
					target.style.left = null;
					target.style.right = null;
			}
			else {
				return;
			}
		}
		
		// Show heading
		function onBox() {
			if (! itsCode) {
				heading.classList.remove('visually-hidden');
			}
			else {
				return;
			}
		}

		// Hide heading
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
