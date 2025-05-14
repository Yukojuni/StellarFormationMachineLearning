document.addEventListener("DOMContentLoaded", () => {
  const runButtons = document.querySelectorAll(".run-button")

  runButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const codeEditor = this.closest(".code-editor")
      const codeArea = codeEditor.querySelector(".code-area")
      const outputContent = codeEditor.querySelector(".output-content")

      // Add animation to show code is running
      this.textContent = "Exécution..."
      this.disabled = true

      // Simulate code execution with a delay
      setTimeout(() => {
        // Output is already pre-defined in the HTML
        // This is just to simulate the execution

        // Reset button
        this.textContent = "Exécuter"
        this.disabled = false

        // Add a flash effect to the output
        outputContent.style.backgroundColor = "rgba(163, 230, 53, 0.1)"
        setTimeout(() => {
          outputContent.style.backgroundColor = ""
        }, 300)
      }, 800)
    })
  })
})
