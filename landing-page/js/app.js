let section = document.querySelectorAll("section");
let ulx = document.createDocumentFragment();
let ul = document.querySelector("#navbar__list")
let x = 1



// Dynamic Nav bar with Scroll

for (const i of section) {
    let list = document.createElement("LI");
    let link = document.createElement("a");


    let text = document.createTextNode(`Section-${x}`)
    link.setAttribute("href", "");
    link.appendChild(text);
    list.addEventListener('click', function (event) {
        event.preventDefault();

        i.scrollIntoView({ behavior: "smooth" });
    })
    list.classList.add(`section${x}`);
    x = x + 1;

    list.appendChild(link)
    ulx.appendChild(list);
}
ul.appendChild(ulx);
///////////////////////////////////////



let nav_list = document.querySelectorAll(".ul li");



//adding Active classes with scroll 
window.addEventListener('scroll', () => {
    let current;
    section.forEach(sec =>{
        if(sec.classList.contains('active')){
            sec.classList.remove('active');
        }
        const secTop = sec.offsetTop;
        if(pageYOffset >= (secTop ) ){
            current = sec.getAttribute('id');
            sec.classList.add('active');
        }
    })

    nav_list.forEach(function(li){
        li.classList.remove('active');

      if(li.classList.contains(current)){
          li.classList.add("active")

      }

  })
} );












