document.addEventListener("DOMContentLoaded", () => {
  // Définition des questions du quiz (intégration STELLAR)
  const quizQuestions = [
    {
      question: "Qu’est-ce que le Machine Learning selon Nova et ORION ?",
      options: [
        "Un langage de programmation pour coder des intelligences artificielles",
        "Une technique où les machines apprennent à partir de données sans instructions explicites",
        "Une nouvelle forme de processeur quantique",
        "Une méthode de cryptographie basée sur les neurones",
      ],
      correctAnswer: 1,
      difficulty: "Débutant",
      explanation:
        "Le Machine Learning permet aux machines de détecter des patterns à partir de données, sans être programmées ligne par ligne.",
    },
    {
      question: "Qu'est-ce qu'un modèle supervisé ?",
      options: [
        "Des données d'entraînement sans labels",
        "Des données étiquetées (input + output) pour apprendre à prédire",
        "Une supervision humaine constante",
        "Des images de planètes",
      ],
      correctAnswer: 1,
      difficulty: "Débutant",
      explanation:
        "En apprentissage supervisé, le modèle apprend avec des données étiquetées, comme dans votre TD STELLAR.",
    },
    {
      question: "Pourquoi séparer les données d'entraînement des données de test ?",
      options: [
        "Pour éviter de réentraîner le modèle",
        "Pour simuler des conditions réelles sur des données inconnues",
        "Pour augmenter la taille du dataset",
        "Pour que le modèle soit plus rapide",
      ],
      correctAnswer: 1,
      difficulty: "Intermédiaire",
      explanation:
        "Cela garantit que les performances reflètent la capacité du modèle à généraliser, comme dans vos étapes de validation avec train_test_split.",
    },
    {
      question: "Qu’est-ce que l’ACP (PCA) permet de faire ?",
      options: [
        "Ajouter des variables aléatoires",
        "Réduire la dimensionnalité tout en conservant l'information principale",
        "Supprimer les lignes manquantes du dataset",
        "Corriger les prédictions incorrectes",
      ],
      correctAnswer: 1,
      difficulty: "Intermédiaire",
      explanation:
        "Comme dans votre TD, l’Analyse en Composantes Principales permet de simplifier les données pour de meilleures performances.",
    },
    {
      question: "Quel modèle a un entraînement séquentiel où chaque erreur est corrigée par le suivant ?",
      options: [
        "K-Nearest Neighbors",
        "Régression linéaire",
        "Bagging",
        "Boosting",
      ],
      correctAnswer: 3,
      difficulty: "Avancé",
      explanation:
        "Le Boosting améliore les performances globales en corrigeant les erreurs des prédictions précédentes.",
    },
    {
      question: "Pourquoi normaliser les données avant l’entraînement ?",
      options: [
        "Pour supprimer les valeurs extrêmes",
        "Pour que toutes les variables soient comparables en échelle",
        "Pour convertir les données en texte",
        "Pour alléger le modèle",
      ],
      correctAnswer: 1,
      difficulty: "Avancé",
      explanation:
        "La normalisation évite qu'une variable comme la température domine le modèle, ce que vous avez implémenté avec StandardScaler.",
    },
    {
      question: "Quel modèle est à la fois simple, interprétable et utilisé dans votre mission ?",
      options: [
        "Réseau de Neurones",
        "Arbre de Décision (CART/ID3)",
        "Random Forest",
        "Régression logistique",
      ],
      correctAnswer: 1,
      difficulty: "Expert",
      explanation:
        "L’arbre de décision a été utilisé dans vos prédictions de tempêtes pour sa lisibilité. Bonus : il se visualise facilement !",
    },
    {
      question: "Que fait la descente de gradient stochastique (SGD) ?",
      options: [
        "Crée des clusters",
        "Optimise les poids en traitant un échantillon à la fois",
        "Visualise les données",
        "Multiplie les couches du modèle",
      ],
      correctAnswer: 1,
      difficulty: "Expert",
      explanation:
        "Elle permet des mises à jour rapides et régulières des poids dans les modèles complexes comme les réseaux de neurones.",
    },
  ]

  // Éléments DOM
  const startQuizBtn = document.getElementById("start-quiz")
  const quizContainer = document.getElementById("quiz-container")
  const questionContainer = document.getElementById("question-container")
  const resultsContainer = document.getElementById("results-container")
  const quizIntro = document.querySelector(".qcm-intro")
  const prevQuestionBtn = document.getElementById("prev-question")
  const nextQuestionBtn = document.getElementById("next-question")
  const submitQuizBtn = document.getElementById("submit-quiz")
  const currentQuestionSpan = document.getElementById("current-question")
  const quizProgress = document.getElementById("quiz-progress")
  const finalScoreSpan = document.getElementById("final-score")
  const scoreMessage = document.getElementById("score-message")
  const resultsDetails = document.getElementById("results-details")
  const retryQuizBtn = document.getElementById("retry-quiz")

  // Variables d'état
  let currentQuestionIndex = 0
  let userAnswers = Array(quizQuestions.length).fill(null)

  // Démarrer le quiz
  startQuizBtn.addEventListener("click", () => {
    quizIntro.classList.add("hidden")
    quizContainer.classList.remove("hidden")
    showQuestion(currentQuestionIndex)
  })

  // Afficher une question
  function showQuestion(index) {
    currentQuestionSpan.textContent = index + 1
    quizProgress.style.width = `${((index + 1) / quizQuestions.length) * 100}%`

    const question = quizQuestions[index]

    let questionHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-difficulty ${question.difficulty.toLowerCase()}">${question.difficulty}</span>
                </div>
                <h3>${question.question}</h3>
                <div class="options-container">
        `

    question.options.forEach((option, optionIndex) => {
      const isSelected = userAnswers[index] === optionIndex
      questionHTML += `
                <label class="option ${isSelected ? "selected" : ""}">
                    <input type="radio" name="q${index}" value="${optionIndex}" ${isSelected ? "checked" : ""}>
                    <span class="option-text">${option}</span>
                </label>
            `
    })

    questionHTML += `
                </div>
            </div>
        `

    questionContainer.innerHTML = questionHTML

    const optionInputs = questionContainer.querySelectorAll('input[type="radio"]')
    optionInputs.forEach((input) => {
      input.addEventListener("change", function () {
        userAnswers[index] = Number.parseInt(this.value)

        const options = questionContainer.querySelectorAll(".option")
        options.forEach((opt) => opt.classList.remove("selected"))
        this.closest(".option").classList.add("selected")

        nextQuestionBtn.disabled = false
      })
    })

    prevQuestionBtn.disabled = index === 0

    if (index === quizQuestions.length - 1) {
      nextQuestionBtn.classList.add("hidden")
      submitQuizBtn.classList.remove("hidden")
    } else {
      nextQuestionBtn.classList.remove("hidden")
      submitQuizBtn.classList.add("hidden")
    }

    nextQuestionBtn.disabled = userAnswers[index] === null
  }

  // Navigation
  prevQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--
      showQuestion(currentQuestionIndex)
    }
  })

  nextQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++
      showQuestion(currentQuestionIndex)
    }
  })

  // Soumettre
  submitQuizBtn.addEventListener("click", () => {
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score++
      }
    })

    finalScoreSpan.textContent = score

    if (score <= 3) {
      scoreMessage.textContent = "Nova a besoin d’un recalibrage. La mission STELLAR est en suspens."
    } else if (score <= 6) {
      scoreMessage.textContent = "Bonne trajectoire, ORION vous accompagne dans vos prochaines explorations."
    } else {
      scoreMessage.textContent = "Excellente compréhension ! Vous êtes prêts à transmettre vos savoirs comme formateurs du futur"
    }

    let detailsHTML = ""
    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index]
      const isCorrect = userAnswer === question.correctAnswer

      detailsHTML += `
                <div class="result-item ${isCorrect ? "correct" : "incorrect"}">
                    <div class="result-question">
                        <span class="result-number">${index + 1}</span>
                        <span class="result-text">${question.question}</span>
                        <span class="result-icon">${isCorrect ? "✓" : "✗"}</span>
                    </div>
                    <div class="result-details">
                        <p><strong>Votre réponse :</strong> ${question.options[userAnswer]}</p>
                        ${!isCorrect ? `<p><strong>Réponse correcte :</strong> ${question.options[question.correctAnswer]}</p>` : ""}
                        <p><strong>Explication :</strong> ${question.explanation}</p>
                    </div>
                </div>
            `
    })

    resultsDetails.innerHTML = detailsHTML

    quizContainer.classList.add("hidden")
    resultsContainer.classList.remove("hidden")
  })

  // Rejouer
  retryQuizBtn.addEventListener("click", () => {
    currentQuestionIndex = 0
    userAnswers = Array(quizQuestions.length).fill(null)
    resultsContainer.classList.add("hidden")
    quizIntro.classList.remove("hidden")
  })
})
