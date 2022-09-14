const div = document.querySelector('div')
const home = document.querySelector('.home')
const universo = document.querySelector('.universo')
const exploracao = document.querySelector('.exploracao')
const body = document.querySelector('body')
const link1 = document.querySelector('nav a:nth-child(2)')
const link2 = document.querySelector('nav a:nth-child(3)')
const link3 = document.querySelector('nav a:nth-child(4)')
universo.addEventListener('click', function() {
  div.classList.add('app')
  body.classList.add('background1')
  body.classList.remove('background2')
  link2.classList.add('bold')
  link1.classList.remove('bold')
  link3.classList.remove('bold')
})

home.addEventListener('click', function() {
  div.classList.add('app')
  body.classList.remove('background2')
  body.classList.remove('background1')
  link2.classList.remove('bold')
  link1.classList.add('bold')
  link3.classList.remove('bold')
})

exploracao.addEventListener('click', function() {
  div.classList.add('app')
  body.classList.add('background2')
  body.classList.remove('background1')
  link2.classList.remove('bold')
  link1.classList.remove('bold')
  link3.classList.add('bold')
})

import Router from "./router.js"
const router = new Router();
router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universo.html")
router.add("/exploration", "./pages/exploracao.html")
router.add(404, "./pages/erro.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()