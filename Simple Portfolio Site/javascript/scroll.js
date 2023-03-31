// General Scroll animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry);
      console.log(entry.target);
      entry.target.classList.toggle('show', entry.isIntersecting);
      // if (entry.isIntersecting) { observer.unobserve(entry.target)}
    })
  }, {
    threshold: 1,
    rootMargin: "-150px 0px 0px 0px",
  }
);

const sections = document.querySelectorAll(".hide");

sections.forEach(section => {
  observer.observe(section);
})

// Navbar Scroll Animation
// const navbar = document.querySelector('.navbar');
// const sidebar = document.querySelector('.navmobile');
// let prevScroll = window.scrollY;

// window.addEventListener('scroll', () => {
//   console.log(`prevscroll: ${prevScroll}, window: ${window.scrollY - 50}`)
//   if (prevScroll  >= (window.scrollY - 50)) {
//     navbar.classList.remove('isScrolled');
//   } else {
//     navbar.classList.add("isScrolled");
//   }
// })

