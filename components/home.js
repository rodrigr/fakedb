export const home = Vue.component('home',{
	props: ['students','teams'],
	template: `<div style="height:65vh" class="d-flex flex-row flex-wrap justify-content-around" >
					<div class="d-flex flex-column justify-content-center align-items-center">
						<div @click="$emit('changeView',{page: 'students'})" class="pointer bg-vue p-5 rounded-circle text-vue d-flex justify-content-center"><i class="fas fa-user-graduate fa-10x fa-fw"></i></div>
						<h3 class="text-vue mt-3 bubble">View Students</h3>
					</div>
					<div class="d-flex flex-column justify-content-center align-items-center">
						<div @click="$emit('changeView',{page: 'teams'})" class="pointer bg-vue p-5 rounded-circle text-vue d-flex justify-content-center"><i class="fab fa-teamspeak fa-10x fa-fw"></i></div>
						<h3 class="text-vue mt-3 bubble">View Teams</h3>
					</div>	

				</div>`
})