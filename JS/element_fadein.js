

const invisible = document.querySelectorAll('.element_invisible');

const options_fadein ={
root: null,
threshold: 0.5,
// rootMargin: "-150px"

};


const myObserver_fadein = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => { 
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("element_fadein");
        observer.unobserve(entry.target);
    });
}, options_fadein);

invisible.forEach (start => { 
    myObserver_fadein.observe(start); //position to initiate
});


