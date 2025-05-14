document.addEventListener("DOMContentLoaded", () => {
  // Navigation active state
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-links a")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")
    if (currentLocation.includes(linkPath) && linkPath !== "index.html") {
      link.classList.add("active")
    } else if (currentLocation.endsWith("/") && linkPath === "index.html") {
      link.classList.add("active")
    }
  })

  // Tutorial navigation
  const tutorialLinks = document.querySelectorAll(".tutorial-nav a")
  const tutorialSections = document.querySelectorAll(".tutorial-section")
  const progressIndicator = document.getElementById("progress-indicator")
  const progressPercentage = document.getElementById("progress-percentage")

  if (tutorialLinks.length > 0 && tutorialSections.length > 0) {
    tutorialLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        // Remove active class from all links and sections
        tutorialLinks.forEach((l) => l.classList.remove("active"))
        tutorialSections.forEach((s) => s.classList.remove("active"))

        // Add active class to clicked link
        this.classList.add("active")

        // Show corresponding section
        const targetId = this.getAttribute("href").substring(1)
        const targetSection = document.getElementById(targetId)
        if (targetSection) {
          targetSection.classList.add("active")

          // Update progress bar
          const step = Number.parseInt(this.getAttribute("data-step"))
          const totalSteps = tutorialLinks.length
          const progress = (step / totalSteps) * 100
          progressIndicator.style.width = `${progress}%`
          progressPercentage.textContent = `${Math.round(progress)}%`

          // Scroll to top of section
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      })
    })

    // Next and Previous buttons
    const nextButtons = document.querySelectorAll(".next-button")
    const prevButtons = document.querySelectorAll(".prev-button")

    nextButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const nextStep = this.getAttribute("data-next")
        const nextLink = document.querySelector(`.tutorial-nav a[href="#${nextStep}"]`)
        if (nextLink) {
          nextLink.click()
        }
      })
    })

    prevButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const prevStep = this.getAttribute("data-prev")
        const prevLink = document.querySelector(`.tutorial-nav a[href="#${prevStep}"]`)
        if (prevLink) {
          prevLink.click()
        }
      })
    })
  }
})
