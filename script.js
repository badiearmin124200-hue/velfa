/* =========================================
   VELFA FRONTEND DEMO
========================================= */

const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");

let toastTimer;


/* =========================================
   TELEGRAM MINI APP
========================================= */

const tg =
    window.Telegram &&
    window.Telegram.WebApp
        ? window.Telegram.WebApp
        : null;

if (tg) {

    tg.ready();

    try {
        tg.expand();
    } catch (error) {
        console.log("Telegram expand unavailable");
    }

}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    if (!toast || !toastText) {
        return;
    }

    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);
}


/* =========================================
   START BUTTON
========================================= */

const startBtn =
    document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document
            .querySelector(".section")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* =========================================
   NOTIFICATION
========================================= */

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );

if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        () => {

            showToast(
                "اعلان جدیدی نداری ✦"
            );

        }
    );

}


/* =========================================
   EXPLORE CARDS
========================================= */

const exploreCards =
    document.querySelectorAll(
        ".explore-card"
    );

exploreCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const title =
                card.dataset.title ||
                "VELFA";

            showToast(
                `${title} به‌زودی آماده میشه ✦`
            );

        }
    );

});


/* =========================================
   ROOM CARDS
========================================= */

const roomCards =
    document.querySelectorAll(
        ".room-card"
    );

roomCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const title =
                card.querySelector("h3")
                    ?.textContent
                    .trim() ||
                "Room";

            showToast(
                `ورود به ${title} به‌زودی ✦`
            );

        }
    );

});


/* =========================================
   FIND PEOPLE
========================================= */

const findPeopleBtn =
    document.getElementById(
        "findPeopleBtn"
    );

if (findPeopleBtn) {

    findPeopleBtn.addEventListener(
        "click",
        () => {

            showToast(
                "پیدا کردن آدم‌های هم‌سلیقه ✦"
            );

        }
    );

}


/* =========================================
   CREATE BUTTON
========================================= */

const createBtn =
    document.getElementById(
        "createBtn"
    );

if (createBtn) {

    createBtn.addEventListener(
        "click",
        () => {

            showToast(
                "ساخت Room جدید به‌زودی ✦"
            );

        }
    );

}


/* =========================================
   NAVIGATION
========================================= */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );

navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            navItems.forEach(
                nav => nav.classList.remove(
                    "active"
                )
            );

            item.classList.add("active");

            const section =
                item.dataset.section;

            if (section === "home") {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;
            }

            if (section === "explore") {

                document
                    .querySelector(".section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

                return;
            }

            if (section === "people") {

                document
                    .querySelector(".people-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

                return;
            }

            if (section === "profile") {

                showToast(
                    "پروفایل VELFA به‌زودی ✦"
                );

            }

        }
    );

});


/* =========================================
   SEE ALL
========================================= */

const seeAll =
    document.querySelector(".see-all");

if (seeAll) {

    seeAll.addEventListener(
        "click",
        () => {

            showToast(
                "تمام Roomها به‌زودی ✦"
            );

        }
    );

}


/* =========================================
   SMALL ENTRANCE ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".room-card, .explore-card, .idea-section, .people-section"
    );

if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08
            }
        );

    animatedElements.forEach(
        element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(18px)";

            element.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(element);

        }
    );

}


/* =========================================
   KEYBOARD / DESKTOP
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }
);