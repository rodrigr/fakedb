export const students = Vue.component('students',{
	props: ['students','teams'],
	template: `<div id="list" class="bubble text-vue">
                    <h2 class="text-center">Students</h2>
                    <ul class="list-group-flush overflow-auto p-0" style="max-height: 65vh">
                        <li class="list-group-item px-md-5 border-vue font-weight-bold" v-for="(student,index) in students">
                            <div class="row justify-content-between">
                                <span class="col-md-6">
                                    {{index + 1}} 
                                    <template v-if="student.photo != null">
                                        <img @click="$emit('changeView',{page: 'profile', student: student})" class="small pic mx-2 pointer" :alt="student.first_name + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.photo">
                                    </template>
                                    <template v-else>
                                        <img @click="$emit('changeView',{page: 'profile', student: student})" class="small pic mx-2 pointer" alt="deafult user photo" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png">
                                    </template>
                                     
                                    {{student.first_name}} 
                                    {{student.middle_name}} 
                                    {{student.last_name}}
                                </span>
                                <span class="col-md-4 text-right text-md-left">
                                    <img class="small pic pointer" @click="$emit('changeView',{page: 'team', team: student.team})" :alt="student.team + ' logo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.team + '_logo.png'">
                                    {{student.team}}
                                </span>
                            </div>  
                        </li>
                    </ul>
                </div>`
})