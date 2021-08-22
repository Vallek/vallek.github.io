let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(
	function changeOnHover(el) {
		
		let infoPopup = el.querySelector('.info');

		let heading = el.querySelector('.box-item__heading');
		let itsCode = el.classList.contains("always-show");
		el.addEventListener('mouseenter', isInViewport);
		el.addEventListener('mouseleave', isOutViewport);

		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);
		
		let boxLink = el.querySelector('.box-item__image-link');
		boxLink.addEventListener('focus', onBox);
		boxLink.addEventListener('focusout', outBox);
		
		let boxHeadingLink = el.querySelector('.caption-link');
		if (! itsCode &&
			boxHeadingLink != null) {
			boxHeadingLink.addEventListener('focus', onBox);
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

		function isInViewport() {
			let boxSide = el.offsetWidth;
			let viewportWidth = window.innerWidth;
			let rightSide = viewportWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			if (
				infoPopup !== null &&
				rightSide >= boxSide &&
				viewportWidth >= 800
			) {
				infoPopup.classList.remove('visually-hidden');
				infoPopup.classList.add('inside-viewport');
				infoPopup.style.left = boxSide + 'px';
			}
			else {
				if (
					infoPopup !== null &&
					leftSide >= boxSide &&
					viewportWidth >= 800
					) {
					infoPopup.classList.remove('visually-hidden');
					infoPopup.classList.add('out-of-viewport');
					infoPopup.style.right = boxSide + 'px';
				}
				else if (infoPopup !== null) {
					infoPopup.style.left = null;
					infoPopup.style.right = null;
					return;
				} 
			}	
		}
		
		function isOutViewport() {
			if (infoPopup !== null) {
				infoPopup.classList.remove('out-of-viewport');
				infoPopup.classList.remove('inside-viewport');
				infoPopup.style.left = null;
				infoPopup.style.right = null;
				infoPopup.classList.add('visually-hidden');
			}
			else {
				return;
			} 
		}
		if (infoPopup !== null) {
			let removeIt = function remove() {	
				infoPopup.classList.add('visually-hidden');	
				infoPopup.style.left = null;
				infoPopup.style.right = null;
			};
			infoPopup.addEventListener('mouseover', removeIt);
		}
		else {
			return;
		}	
	}
);
