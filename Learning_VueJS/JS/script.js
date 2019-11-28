let a = false;
let b = false;
let app = new Vue({
    el: '#app',
    data: {
        divisiones: 1,
        divisiones2: 1,
        cantidad: '',
    },
    computed: {
        total1: function() {
            if (a == true) {
                x = Number(this.divisiones)
                return x
            }
        },
        total2: function() {
            if (b == true) {
                y = Number(this.divisiones)
                return y
            }
        }
    },
    methods: {
        tabla1: function() {
            a = true;
            b = false;
            console.log("click tabla 1");
        },
        tabla2: function() {
            a = false;
            b = true;
            console.log("click tabla 2");
        },
    }
});