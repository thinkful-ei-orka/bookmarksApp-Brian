class StarRating extends HTMLElement {
    highlight (index) {
        this.stars.forEach((star, i) => {
         star.classList.toggle('full', i <= index);
    });
}
    
    constructor(){
        super();

        this.stars = [];

        for (let i = 0; i < 5; i++){
            let s = document.createElement('div');
            s.className = 'star';
            this.appendChild(s);
            this.stars.push(s);
        }
    }
}

window.customElements.define('x-star-rating', StarRating);