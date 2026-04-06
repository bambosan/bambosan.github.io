const navBtns = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view");
const navContainer = document.getElementById("nav-container");

function loadViewFromHash() {
  let hash = window.location.hash.replace("#", "");
  if (!hash || !document.getElementById("view-" + hash)) {
    hash = "home";
  }

  navBtns.forEach((b) => b.classList.remove("active"));
  views.forEach((v) => v.classList.remove("active"));

  document.getElementById("view-" + hash).classList.add("active");

  const activeBtn = document.querySelector(`.nav-btn[data-target="${hash}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("load", loadViewFromHash);
window.addEventListener("hashchange", loadViewFromHash);

function closeMobileMenu() {
  navContainer.classList.remove("open");
  mobileToggleBtn.classList.remove("open");
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    window.location.hash = target;
    closeMobileMenu();
  });
});

const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
mobileToggleBtn.addEventListener("click", () => {
  navContainer.classList.toggle("open");
  mobileToggleBtn.classList.toggle("open");
});

const osBtns = document.querySelectorAll(".os-tab-btn");
const osContents = document.querySelectorAll(".os-content");

osBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const os = btn.getAttribute("data-os");

    osBtns.forEach((b) => b.classList.remove("active"));
    osContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(`os-${os}`).classList.add("active");
  });
});

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

function openModal(src) {
  modalImg.src = src;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  setTimeout(() => {
    modalImg.src = "";
  }, 300);
  document.body.style.overflow = "auto";
}

function odp(elm) {
  elm.href = `../download/?durl=${btoa(elm.href)}`;
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
