export const teams = Vue.component('teams', {
	props: ['students','teams'],
	template: `<div class="row">
					<div v-for="team in teams" class="col-md-6 d-flex flex-column justify-content-center align-items-center">
						<div @click="$emit('changeView',{page: 'team', team: team})" class="pointer"><img class="pic bg-white" :alt="team + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + team + '_logo.png'"></div>
						<h3 class="text-vue mt-3 bubble">{{team}}</h3>
					</div>
				</div>`
})