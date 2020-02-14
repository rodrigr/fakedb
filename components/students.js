export const students = Vue.component('students',{
	props: ['students','teams'],
	template: `<div id="list" class="bubble">
                    <h2 class="text-vue text-center">Students</h2>
                    <ul class="list-group-flush overflow-auto p-0" style="max-height: 65vh">
                        <li class="list-group-item d-flex flex-row flex-wrap px-md-5 justify-content-between align-items-center border-dark" v-for="(student,index) in students">
                            <span>
                                {{index + 1}} 
                                <template v-if="student.photo != null">
                                    <img @click="$emit('changeView',{page: 'profile', student: student})" class="small pic mx-4 pointer" :alt="student.first_name + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.photo">
                                </template>
                                <template v-else>
                                    <img @click="$emit('changeView',{page: 'profile', student: student})" class="small pic mx-4 pointer" alt="deafult user photo" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png">
                                </template>
                                 
                                {{student.first_name}} 
                                {{student.middle_name}} 
                                {{student.last_name}}
                            </span>
                            <span>
                                Team {{student.team}}
                                <img class="small pic pointer" @click="$emit('changeView',{page: 'team', team: student.team})" :alt="student.team + ' logo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.team + '_logo.png'">
                            </span>
                        </li>
                    </ul>
                </div>`
})