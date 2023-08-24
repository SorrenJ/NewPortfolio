

const typing1 = document.querySelectorAll('.branch-initial');

const options2 ={
root: null,
threshold: 0.5,
// rootMargin: "-150px"

};


const myObserver2 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => { 
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("branch-active");
        observer.unobserve(entry.target);
    });
}, options2);

typing1.forEach (div => { 
    myObserver2.observe(div);
});


