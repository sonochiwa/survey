new Vue({
    el: '#app',
    data: {
        isActive: true,
        isDisabled: true,
        score: 0,
        askNumb: 0,
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
    }
})