window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtn = document.querySelector(".menu__btn");
    const navigation = document.querySelector(".nav")
    const navItems = document.querySelectorAll(".nav a")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    })

    navItems.forEach(navItem => {
        navItem.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
        })
    })
})