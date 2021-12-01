new Vue({
    el: '#app',
    data: {
        isActive: true,
        isDisabled: true,
        score: 0,
        askNumb: 0,
        x: 1,
        // value: [],
        message: '',
        message2: ''
    },
    methods: {
        btnTrue(event) {
            event.target.classList.add('btn-true');
            this.score += 1;
        },
        btnFalse(event) {
            event.target.classList.add('btn-false');
            event.target.classList.add('disabled');
        },
        show(event) {
            this.x += 1;
        },
        addMessage(e) {
            this.message = (e.target.value);
            if (this.message == 2) {
                this.score += 1
            }
        },
        addMessage2(e) {
            this.message2 = (e.target.value);
            if (this.message2 == 'Германия') {
                this.score += 1
            }
        }

        // insertNumb(event) {
        //     if (numb == 2) {
        //         console.log('yep')
        //     } else {
        //         console.log('nope')
        //     }
        // }
    }
})