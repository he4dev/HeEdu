window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    const downloadSections = document.querySelectorAll(".div-effects");  // جلب جميع العناصر بنفس الكلاس
  
    // إضافة كلاس للـ navbar بعد 50px
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
  
    // إضافة كلاس على جميع الـ divs اللي فيها الكلاس div-effects
    downloadSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // لما العنصر يظهر بنسبة 300px داخل الـ viewport
        if (sectionTop < windowHeight - 100) {
            section.classList.add("at-download");
        } else {
            section.classList.remove("at-download");
        }
    });
});

// تطبيق التمرير السلس بدون تغيير ارتفاع body
const scrollWrap = document.getElementsByClassName("main")[0],
    speed = 0.04;

var offset = 0;

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    requestAnimationFrame(smoothScroll);
}

smoothScroll();
