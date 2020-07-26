function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            //animation continue
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        error("#cc3300");
    } else {
        error("#00b386");
        return true;
    }
}


function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("#00b386");
        return true;
    } else {
        error("#cc3300");
    }
}


function nextSlide(parent, nextForm) {
    parent.classList.add("innactive");
    parent.classList.add("active");
    nextForm.classList.add("active");
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();