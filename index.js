const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

function ShowProjectDialogue(title, text, image, github, web){

		document.getElementById("pr-d").style.display = "block"
		document.getElementById("pr-d-title").textContent = title;
		document.getElementById("prd-image").src = image;
		document.getElementById("prd-text").textContent = text;
		document.getElementById("github-link").href = github;
		document.getElementById("web-link").href = web;

		document.getElementById("close-dialogue").addEventListener("click",
			(e) =>{
				document.getElementById("pr-d").style.display = "none"
			}
		)

	

}

