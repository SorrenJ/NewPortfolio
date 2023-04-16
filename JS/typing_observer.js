

const typing = document.querySelectorAll('.typing-demo');

const options1 ={
root: null,
threshold: 0.5,
// rootMargin: "-150px"

};


const myObserver1 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => { 
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("active-type");
        observer.unobserve(entry.target);
    });
}, options1);

typing.forEach (div => { 
    myObserver1.observe(div);
});


