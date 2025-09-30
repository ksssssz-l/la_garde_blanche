function openNav() {
    document.querySelector("#myNav").style.width = "100%";
}

function closeNav() {
    document.querySelector("#myNav").style.width = "0";
}

// // Overlay menu dynamique sans rechargement de page
// (function() {
// 	const btn = document.getElementById('burgerBtn');
// 	const overlay = document.getElementById('menu-overlay');
// 	if (!btn || !overlay) return;

// 	let loaded = false;
// 	let focusableEls = [];
// 	let firstFocusable, lastFocusable;
// 	const ACTIVE_CLASS = 'is-open';

// 	function fetchFragment() {
// 		return fetch('menu.html', { cache: 'no-store' })
// 			.then(r => r.text())
// 			.then(html => {
// 				const parser = new DOMParser();
// 				const doc = parser.parseFromString(html, 'text/html');
// 				const fragment = doc.querySelector('[data-fragment]');
// 				overlay.innerHTML = '';
// 				overlay.appendChild(fragment || document.createTextNode('Menu introuvable'));
// 				prepareFocusables();
// 				loaded = true;
// 			})
// 			.catch(err => {
// 				overlay.innerHTML = '<p style="color:#fff">Erreur de chargement du menu</p>';
// 				console.error('Menu load error', err);
// 			});
// 	}

// 	function prepareFocusables() {
// 		focusableEls = overlay.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
// 		firstFocusable = focusableEls[0];
// 		lastFocusable = focusableEls[focusableEls.length - 1];
// 	}

// 	function openMenu() {
// 		if (!loaded) {
// 			fetchFragment().then(() => {
// 				show();
// 			});
// 		} else {
// 			show();
// 		}
// 	}

// 	function show() {
// 		overlay.hidden = false;
// 		requestAnimationFrame(() => overlay.classList.add(ACTIVE_CLASS));
// 		btn.classList.add('is-active');
// 		btn.setAttribute('aria-expanded', 'true');
// 		document.body.style.overflow = 'hidden';
// 		prepareFocusables();
// 		if (firstFocusable) firstFocusable.focus();
// 		document.addEventListener('keydown', onKeydown);
// 		document.addEventListener('click', onDocClick);
// 	}

// 	function closeMenu() {
// 		overlay.classList.remove(ACTIVE_CLASS);
// 		btn.classList.remove('is-active');
// 		btn.setAttribute('aria-expanded', 'false');
// 		document.body.style.overflow = '';
// 		document.removeEventListener('keydown', onKeydown);
// 		document.removeEventListener('click', onDocClick);
// 		setTimeout(() => {
// 			overlay.hidden = true;
// 		}, 400); // correspond à la transition CSS
// 		btn.focus();
// 	}

// 	function onKeydown(e) {
// 		if (e.key === 'Escape') {
// 			closeMenu();
// 		} else if (e.key === 'Tab' && focusableEls.length) {
// 			if (e.shiftKey && document.activeElement === firstFocusable) {
// 				e.preventDefault();
// 				lastFocusable.focus();
// 			} else if (!e.shiftKey && document.activeElement === lastFocusable) {
// 				e.preventDefault();
// 				firstFocusable.focus();
// 			}
// 		}
// 	}

// 	function onDocClick(e) {
// 		if (!overlay.contains(e.target) && e.target !== btn) {
// 			closeMenu();
// 		}
// 	}

// 	btn.addEventListener('click', () => {
// 		const expanded = btn.getAttribute('aria-expanded') === 'true';
// 		if (expanded) {
// 			closeMenu();
// 		} else {
// 			openMenu();
// 		}
// 	});
// })();
