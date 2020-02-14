export const profile = Vue.component('profile', {
	props: ["students","teams","currentStudent"],
	template: `<div class="d-flex flex-column justify-content-around align-items-center">
					<template v-if="currentStudent.photo != null">
						<img class="pic" :alt="currentStudent.first_name + ' profile picture'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + currentStudent.photo"> 
					</template>
					<template v-else>
						<img class="pic" :alt="currentStudent.first_name + ' profile picture'" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png"> 
					</template>
					<div class="bubble text-vue w-50 mt-5 text-center">
						<h3>{{currentStudent.first_name}} {{currentStudent.middle_name}} {{currentStudent.last_name}}</h3>
					</div>
					
				</div>`
})