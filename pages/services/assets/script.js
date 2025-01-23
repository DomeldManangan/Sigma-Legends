const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(f => {
            if (f !== faq) {
                f.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});

