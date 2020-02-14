export const myNav = Vue.component('navigator', {
  props: ['currentView'],
  template: `<nav class="navbar sticky-top navbar-light bg-vue navbar-expand-md w-100">
                <img id="logo" class="rounded-circle" src="img/start_logo.png" alt="logo">
                <a class="navbar-brand ml-4" href="#">    
                  <h1 class="d-inline text-vue">Vue</h1>
                  <span class="d-none d-md-inline"> | Components </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse " id="navbarToggler">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li :class="{'active': currentView == 'home', 'nav-item': true}">
                      <a class="nav-link" @click="$emit('changeView',{page: 'home'})" href="#">Home</a>
                    </li>
                    <li :class="{'active': currentView == 'students', 'nav-item': true}">
                      <a class="nav-link" @click="$emit('changeView',{page: 'students'})" href="#">Students</a>
                    </li>
                    <li :class="{'active': currentView == 'teams', 'nav-item': true}">
                      <a class="nav-link" @click="$emit('changeView',{page: 'teams'})" href="#">Teams</a>
                    </li>
                  </ul>
                </div>
              </nav>`,
})


