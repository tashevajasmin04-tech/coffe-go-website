// ====== ОТПРАВКА ФОРМЫ В TELEGRAM ======
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const BOT_TOKEN = "8357689035:AAGk0me-lsc1vVHks2JIf-EScg9hCIm1V9Y";
    const CHAT_ID = "1287066384";

    const name = this.name.value;
    const phone = this.phone.value;
    const message = this.message.value;

    const text = `📩 Новая заявка\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Сообщение: ${message}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    })
    .then(() => {
        document.getElementById("form-response").innerText = "Ваше сообщение отправлено!";
        this.reset();
    })
    .catch(() => {
        document.getElementById("form-response").innerText = "Ошибка отправки.";
    });
});
// ====== КАРУСЕЛЬ МЕНЮ ======
const menuModal = document.getElementById("menuModal");
const openBtn   = document.getElementById("openMenu");
const closeBtn  = document.getElementById("closeMenu");

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");

let currentSlide = 0;

// показать слайд
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// открыть модалку
openBtn.onclick = () => {
    menuModal.style.display = "flex";
    currentSlide = 0;
    showSlide(currentSlide);
};

// закрыть
closeBtn.onclick = () => {
    menuModal.style.display = "none";
};

// закрыть по клику снаружи
window.onclick = e => {
    if (e.target === menuModal) {
        menuModal.style.display = "none";
    }
};

// следующий слайд
nextBtn.onclick = () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
};

// предыдущий слайд
prevBtn.onclick = () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
};


