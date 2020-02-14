import {myNav} from "../components/navigator.js";
import {home} from "../components/home.js"
import {students} from "../components/students.js";
import {teams} from "../components/teams.js";
import {team} from "../components/team.js"
import {profile} from '../components/profile.js'

export const app = Vue.component('app',{
	props : ['students','teams'],
	data(){
		return {
	        current: 'home',
	        currentTeam: '',
	        currentStudent: '',
	        history: [],
		}
	},
	methods: {
		handelView(event){
			this.history.push(this.current)
			this.current = event.page != undefined ? event.page : this.current 
			this.currentTeam = event.team != undefined ? event.team : this.currentTeam
			this.currentStudent = event.student != undefined ? event.student : this.currentStudent

		},
		goBack(){
			this.current = this.history[this.history.length - 1]
			this.history.pop()
		}

	},
    template: `<div>
    			 <navigator @changeView="handelView" :current-view="current"></navigator>

	              <main class="m-md-3 mt-5">
	                <component :is="current"  :students="students" :teams="teams" :currentTeam="currentTeam" :currentStudent="currentStudent" @changeView="handelView"></component>
	              </main>

	              <template v-if="history.length > 0">
	              	<div @click="goBack" class="back pointer text-vue bg-vue rounded-circle d-flex justify-content-center p-3"><i class="fas fa-undo fa-3x"></i></div>
	              </template>
	              
    		  </div>`
})