const Home = {
    template: '#home',
    data(){
        return {
            options: '',
            texto: 'Henry Ford (Greenfield Township, atual Condado de Wayne, 30 de julho de 1863 — Dearborn, 7 de abril de 1947) foi um empreendedor e engenheiro mecânico estadunidense, fundador da Ford Motor Company, autor dos livros Minha filosofia de indústria e Minha vida e minha obra[2], e o primeiro empresário a aplicar a montagem em série de forma a produzir em massa automóveis em menos tempo[3] e a um menor custo.[4] A introdução de seu modelo Ford T revolucionou os transportes e a indústria dos Estados Unidos.[5] Ford foi um inventor prolífico e registrou 161 patentes nos Estados Unidos.[6] Como único dono da Ford Company, ele se tornou um dos homens mais ricos e conhecidos do mundo.[7] No dia 16 de junho de 1903, dia da fundação da Ford Motor Company, foi investido um capital de US$ 150 000 (em valores da época), de 12 sócios, sendo que US$ 28 000 foram investidos pelo próprio Ford, com então 40 anos na época. ',
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
            /*
            const texto = document.getElementById('texto')
            //window.MozBlobBuilder || window.webkitBlobBuilder || window.BlobBuilder)()
            const bb = new Blob(['lucas'])
            //bb.append((new XMLSerializer).serializeToString(document))
            const blob = bb.getBlob("application/xhtml+xml;charset=utf-8" + document.characterSet);
            saveAs(blob, "document.xhtml");
            */

           var downloading = chrome.downloads.download({
            url : downloadUrl,
            filename : 'my-image-again.png',
            conflictAction : 'uniquify'
           })
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