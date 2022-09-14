export default class Router {

  routes = {}

  add(routeName, page) { //fazendo mapeamento dos caminhos - passando como argumento os caminhos(rotas) e páginas
    this.routes[routeName] = page
  }

  route(event) { //aqui é pegando o evento click, se caso for clicado algum href do nav, será executada essa função
    event = event || window.event
    event.preventDefault() //dentro do event tem essa funcionalidade que faz com que o elemento não faça o padrão -> o padrão do click em qualquer link 'a' é redirecionar para a página do link
    window.history.pushState({}, "", event.target.href) //colocando o caminho do href clicado no history do window
    this.handle() //referenciando o handle abaixo que está dentro da class
  }
    handle() {
      const pathname = window.location.pathname //pegando o caminho que está no history do window
      const route = this.routes[pathname] || this.routes[404]
      fetch(route).then(data => data.text()).then(html => {document.querySelector('.app').innerHTML = html})
    }
}