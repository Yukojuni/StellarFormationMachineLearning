document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form")
  const quizResults = document.getElementById("quiz-results")
  const quizScore = document.getElementById("quiz-score")
  const quizFeedback = document.getElementById("quiz-feedback")

  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Correct answers
      const correctAnswers = {
        q1: "b",
        q2: "a",
        q3: "b",
      }

      // Get user answers
      const formData = new FormData(quizForm)
      let score = 0
      let feedback = ""

      // Check answers
      for (const [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
          score++
          feedback += `<p class="correct">Question ${question.substring(1)}: Correct! ✓</p>`
        } else {
          feedback += `<p class="incorrect">Question ${question.substring(1)}: Incorrect ✗</p>`
        }
      }

      // Display results
      quizScore.textContent = score
      quizFeedback.innerHTML = feedback
      quizResults.classList.remove("hidden")

      // Scroll to results
      quizResults.scrollIntoView({ behavior: "smooth" })

      // Add styles for correct/incorrect answers
      const styleElement = document.createElement("style")
      styleElement.textContent = `
                .correct {
                    color: var(--accent-lime);
                }
                .incorrect {
                    color: var(--accent-error);
                }
            `
      document.head.appendChild(styleElement)
    })
  }
})
