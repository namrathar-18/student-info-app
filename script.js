/* =========================================
   MCAHUB STUDENT PORTAL
   Interactive JavaScript
========================================= */


/* =========================================
   STUDENT DATA
========================================= */

const students = [
    {
        name: "Namratha R",
        registerNumber: "2547234",
        programme: "MCA",
        initials: "NR"
    },

    {
        name: "Yash Barjatya",
        registerNumber: "2547257",
        programme: "MCA",
        initials: "YB"
    },

    {
        name: "Ajanya Vinayan",
        registerNumber: "2547205",
        programme: "MCA",
        initials: "AV"
    }
];


/* =========================================
   SEARCH STUDENTS
========================================= */

function searchStudents() {

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const studentCards =
        document.querySelectorAll(".student-card");

    const noResults =
        document.getElementById("noResults");

    let visibleStudents = 0;


    studentCards.forEach(card => {

        const studentName =
            card.dataset.name.toLowerCase();

        if (studentName.includes(searchValue)) {

            card.style.display = "block";

            visibleStudents++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleStudents === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================================
   OPEN STUDENT PROFILE
========================================= */

function openStudent(
    name,
    registerNumber,
    programme,
    initials
) {

    document.getElementById("modalName").textContent =
        name;

    document.getElementById("modalRegister").textContent =
        registerNumber;

    document.getElementById("modalProgramme").textContent =
        programme;

    document.getElementById("modalAvatar").textContent =
        initials;


    document
        .getElementById("studentModal")
        .classList.add("active");

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document
        .getElementById("studentModal")
        .classList.remove("active");

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("studentModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


/* =========================================
   ESC KEY CLOSE MODAL
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================
   SCROLL TO STUDENTS
========================================= */

function scrollToStudents() {

    document
        .getElementById("students")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =========================================
   REMEMBER THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================================
   NOTIFICATION
========================================= */

function showNotification() {

    const notification =
        document.getElementById("notification");

    notification.classList.add("show");


    setTimeout(function() {

        notification.classList.remove("show");

    }, 3500);

}


/* =========================================
   ABOUT MESSAGE
========================================= */

function showAbout() {

    alert(
        "MCAHub is a simple Student Information Portal " +
        "built using HTML, CSS and JavaScript. " +
        "It demonstrates a modern frontend interface " +
        "for managing MCA student information."
    );

}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "MCAHub Student Information Portal loaded successfully."
    );

    console.log(
        `Total Students: ${students.length}`
    );

});