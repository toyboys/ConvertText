const Home = {
    template: '#home',
    data(){
        return {
            options: '',
            texto: '',
        }
    },
    methods: {
        modify(){
            //Reverse, Capitalized, UpperCase
            if(this.options === 'Capitalized'){
                this.texto = this.texto.toString().toLowerCase()

                let texto = this.texto.split(' ')

                const arr = texto.map(item => item.charAt(0).toUpperCase() + item.slice(1))
                
                this.texto = arr.join(' ')
            }

            if(this.options === 'Reverse'){
                let text = this.texto.split('').reverse().join('')

                this.texto = text
            }

            if(this.options === 'UpperCase'){
                this.texto = this.texto.toString().toUpperCase()
            }

            if(this.options === 'LowerCase'){
                this.texto = this.texto.toString().toLowerCase()
            }
        },
        clear(){
            this.texto = ''
        },
        copy(){
            const texto = document.getElementById('texto')
            texto.select()
            texto.setSelectionRange(0,99999)
            document.execCommand("copy")
        },
        download(){
                const texto = document.getElementById("texto").value
                let titulo = "DOWNLOAD";               
                let blob = new Blob([texto], { type: "text/plain;charset=utf-8" })
                saveAs(blob, titulo + ".txt")
        }
    }
}

const Info = {
    template: '#info',
}

const routes = [
    { path: '/', component: Home },
    { path: '/info', component: Info },
]

const router = new VueRouter({ mode: 'history', routes })

const app = new Vue({
    el: '#app',
    router,
    data() {
        return {
            title: ''
        }
    }
})