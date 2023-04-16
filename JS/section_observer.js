const sections = document.querySelectorAll('section');

const options ={
root: null,
threshold: 0.5,
// rootMargin: "-150px"

};


const myObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => { 
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("fadein");
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach (section => { 
    myObserver.observe(section);
});


