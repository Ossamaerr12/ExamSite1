document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // منع السلوك الافتراضي
        const targetId = this.getAttribute('href').substring(1); // الحصول على معرف القسم
        const targetSection = document.getElementById(targetId);

        // التمرير السلس المخصص
        const sectionPosition = targetSection.offsetTop; // موقع القسم
        const startPosition = window.pageYOffset; // موقع البداية
        const distance = sectionPosition - startPosition; // المسافة بين البداية والقسم
        const duration = 500; // مدة الانتقال (800ms)
        let start = null;

        function animationScroll(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animationScroll);
    });
});
// Get modal elements
// Get the modals
var privacyModal = document.getElementById("privacy-policy");
var termsModal = document.getElementById("terms-conditions");

// Get the button that opens the modal
var privacyBtn = document.getElementById("privacy-btn");
var termsBtn = document.getElementById("terms-btn");

// Get the <span> element that closes the modal
var closeBtns = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
privacyBtn.onclick = function() {
    privacyModal.style.display = "block";
}

termsBtn.onclick = function() {
    termsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (let closeBtn of closeBtns) {
    closeBtn.onclick = function() {
        privacyModal.style.display = "none";
        termsModal.style.display = "none";
    }
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === privacyModal || event.target === termsModal) {
        privacyModal.style.display = "none";
        termsModal.style.display = "none";
    }
}
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // تفعيل أو إخفاء قائمة الروابط
});

