export const students = Vue.component('students',{
	props: ['students','teams','studentsView'],
    data(){
        return {
            view: this.studentsView,
            studentHover: "",
        }
    },
    methods: {
        fullName(student){
            return student.first_name + " " + (student.middle_name || "") + " " + student.last_name
        }
    },
	template: `<div id="students" class="bubble text-vue">
                    <div class="row">
                        <h2 class="col-10 text-center">Students</h2>
                        <span class="col-2 d-flex align-items-center justify-content-end pr-4">
                            <i @click="view = 'list'" id="list" :class="['fas','fa-list-ul','fa-2x','pointer','p-2', view == 'list' ? 'selected' : '']"></i>
                            <i @click="view = 'grid'" id="grid" :class="['fas','fa-th-large','fa-2x','pointer','p-2', view == 'grid' ? 'selected' : '']"></i>
                        </span>
                    </div>
                    <template v-if="view == 'list'">
                        <ul class="list-group-flush overflow-auto p-0" style="max-height: 65vh">
                            <li class="list-group-item px-md-5 border-vue font-weight-bold" v-for="(student,index) in students">
                                <div class="row justify-content-between">
                                    <span class="col-md-6">
                                        {{index + 1}} 
                                        <template v-if="student.photo != null">
                                            <img @click="$emit('changeView',{page: 'profile', student: student, studentsView: view})" class="small pic mx-2 pointer" :alt="student.first_name + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.photo">
                                        </template>
                                        <template v-else>
                                            <img @click="$emit('changeView',{page: 'profile', student: student, studentsView: view})" class="small pic mx-2 pointer" alt="deafult user photo" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png">
                                        </template>
                                         
                                        {{student.first_name}} 
                                        {{student.middle_name}} 
                                        {{student.last_name}}
                                    </span>
                                    <span class="col-md-4 text-right text-md-left">
                                        <img class="small pic pointer" @click="$emit('changeView',{page: 'team', team: student.team, studentsView: view})" :alt="student.team + ' logo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.team + '_logo.png'">
                                        {{student.team}}
                                    </span>
                                </div>  
                            </li>
                        </ul>
                    </template>
                    <template v-if="view == 'grid'">
                        <div class="row justify-content-around align-items-center p-5">
                            <div v-for="student in students" class="col-3 col-md-2 m-2 p-0">
                                <template v-if="student.photo != null">
                                    <img @click="$emit('changeView',{page: 'profile', student: student, studentsView: view})" @mouseover="studentHover = fullName(student)" @mouseout="studentHover = ''" class="small pic mx-2 pointer" :alt="student.first_name + ' photo'" :src="'https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/' + student.photo">
                                </template>
                                <template v-else>
                                    <img @click="$emit('changeView',{page: 'profile', student: student, studentsView: view})" @mouseover="studentHover = fullName(student)" @mouseout="studentHover = ''" class="small pic mx-2 pointer" alt="deafult user photo" src="https://raw.githubusercontent.com/rodrigr/vue-demo/master/img/default.png">
                                </template>
                            </div>
                        </div>
                        <div> 
                            <h4 style="height:30px" id="name" class="text-center">{{studentHover}}</h4>
                        </div>
                    </template>               
                </div>`
})
