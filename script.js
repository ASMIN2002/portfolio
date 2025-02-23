const typed = new Typed(".typed-text", {
  strings: ["Frontend Developer.", "Web Designer.", "Backend Developer."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function animateTimelineItems() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("animate");
    }, index * 200);
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    } else {
      item.classList.remove("animate");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);

window.addEventListener("load", handleScrollAnimation);

function animateSkills() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    if (isInViewport(bar) && !bar.style.width) {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = percentage + "%";
      const percentageSpan =
        bar.parentElement.previousElementSibling.querySelector(
          ".skill-percentage"
        );
      let count = 0;
      const interval = setInterval(() => {
        if (count >= parseInt(percentage)) {
          clearInterval(interval);
        } else {
          count++;
          percentageSpan.textContent = count + "%";
        }
      }, 20);
    }
  });
}
let form = document.querySelector("form");
let fulname = document.getElementById("name");
let eemail = document.getElementById("email");
let phone = document.getElementById("mobile");
let subject = document.getElementById("subject");
let mesg = document.getElementById("message");

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
