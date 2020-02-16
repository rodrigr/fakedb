let vm

start()

async function start(){
    await import('./components/app.js')

    vm = new Vue({
        el: '#wrapper',
        data: {
            url: "https://raw.githubusercontent.com/rodrigr/vue-demo/master/db.json",
            init: {
                method: 'GET',
            },
            students: [],
            teams: [],
        },
        created(){
            fetch(this.url, this.init)
            .then(function(res){
                if(res.ok){
                    return res.json()
                } else{
                    throw new Error(res.status)
                }
            })
            .then(function(json){
                vm.students = json.students
                vm.teams = vm.getKeyValue(json.students,"team")
            })
            .catch(function(error){
                console.log(error)
            })
        },
        methods:{
            toPhrase(string){
                if(string.length > 1){
                    return string.split("_").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
                }else{
                    return string[0].toUpperCase() + string.slice(1)
                }
            },
            getKeyValue(array,key){
                let result = []
                array.forEach(e => !result.includes(e[key]) ? result.push(e[key]) : null)

                return result
            },
        },
    })
}
