export const team = Vue.component('team', {
	props: ['students', 'teams', 'currentTeam'],
	template: `<div>
					<h2 class="text-vue bubble text-center w-50 mx-auto mb-3">{{currentTeam}}</h2>
					<div class="row">
						<template v-for="student in students" v-if="student.team == currentTeam">
							<div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
								<div @click="$emit('changeView',{page: 'profile', student: student})" class="pointer">
									<template v-if="student.photo != null">
										<img class="pic bg-white" :alt="student.first_name + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.photo">
									</template>
									<template v-else>
										<img class="pic bg-white" alt="default user photo" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png">
									</template>
								</div>
								<h3 class="text-vue mt-3 bubble">{{student.first_name}} {{student.middle_name}}</h3>
							</div>
						</template>
					</div>
				</div>`
				
})