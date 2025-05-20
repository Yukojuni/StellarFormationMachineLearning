document.addEventListener("DOMContentLoaded", () => {
  // Définition des questions du quiz
  const quizQuestions = [
    {
      question: "Qu'est-ce que le Machine Learning ?",
      options: [
        "Un langage de programmation spécifique à l'intelligence artificielle",
        "Une branche de l'IA qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés",
        "Un type de matériel informatique spécialisé pour les calculs complexes",
        "Un système d'exploitation conçu pour les superordinateurs",
      ],
      correctAnswer: 1,
      difficulty: "Facile",
      explanation:
        "Le Machine Learning est une branche de l'intelligence artificielle qui permet aux systèmes d'apprendre et de s'améliorer à partir de l'expérience sans être explicitement programmés.",
    },
    {
      question: "Quelle est la différence entre l'apprentissage supervisé et non supervisé ?",
      options: [
        "L'apprentissage supervisé nécessite un superviseur humain, l'apprentissage non supervisé est entièrement automatisé",
        "L'apprentissage supervisé utilise des données étiquetées, l'apprentissage non supervisé utilise des données non étiquetées",
        "L'apprentissage supervisé est plus rapide, l'apprentissage non supervisé est plus précis",
        "L'apprentissage supervisé est utilisé pour la classification, l'apprentissage non supervisé uniquement pour la régression",
      ],
      correctAnswer: 1,
      difficulty: "Facile",
      explanation:
        "Dans l'apprentissage supervisé, l'algorithme apprend à partir de données étiquetées (avec des réponses connues), tandis que dans l'apprentissage non supervisé, il doit trouver des structures dans des données non étiquetées.",
    },
    {
      question: "Qu'est-ce qu'un modèle de régression linéaire tente de faire ?",
      options: [
        "Classer les données en catégories distinctes",
        "Trouver des groupes naturels dans les données",
        "Prédire une valeur continue basée sur des variables d'entrée",
        "Réduire la dimensionnalité des données",
      ],
      correctAnswer: 2,
      difficulty: "Facile",
      explanation:
        "La régression linéaire tente de modéliser la relation entre des variables en ajustant une équation linéaire aux données observées pour prédire une valeur continue.",
    },
    {
      question: "Quelle métrique n'est PAS utilisée pour évaluer un modèle de classification ?",
      options: ["Précision (Accuracy)", "Rappel (Recall)", "F1-Score", "Erreur quadratique moyenne (MSE)"],
      correctAnswer: 3,
      difficulty: "Intermédiaire",
      explanation:
        "L'erreur quadratique moyenne (MSE) est principalement utilisée pour évaluer les modèles de régression, pas les modèles de classification.",
    },
    {
      question: "Qu'est-ce que le surapprentissage (overfitting) ?",
      options: [
        "Quand un modèle apprend trop rapidement",
        "Quand un modèle est trop complexe et capture le bruit dans les données d'entraînement",
        "Quand un modèle est trop simple pour capturer la complexité des données",
        "Quand un modèle utilise trop de ressources informatiques",
      ],
      correctAnswer: 1,
      difficulty: "Intermédiaire",
      explanation:
        "Le surapprentissage se produit lorsqu'un modèle apprend les détails et le bruit des données d'entraînement au point qu'il affecte négativement la performance du modèle sur de nouvelles données.",
    },
    {
      question: "Quelle technique est utilisée pour réduire la dimensionnalité des données ?",
      options: ["K-means clustering", "Random Forest", "Analyse en Composantes Principales (PCA)", "Gradient Boosting"],
      correctAnswer: 2,
      difficulty: "Intermédiaire",
      explanation:
        "L'Analyse en Composantes Principales (PCA) est une technique statistique qui transforme les variables corrélées en un ensemble plus petit de variables non corrélées appelées composantes principales.",
    },
    {
      question: "Dans un réseau de neurones, que fait la fonction d'activation ?",
      options: [
        "Elle détermine la vitesse d'apprentissage du réseau",
        "Elle introduit la non-linéarité dans la sortie d'un neurone",
        "Elle initialise les poids du réseau",
        "Elle détermine le nombre de couches cachées",
      ],
      correctAnswer: 1,
      difficulty: "Avancé",
      explanation:
        "La fonction d'activation introduit des non-linéarités dans le réseau, permettant au modèle d'apprendre des relations complexes dans les données qui ne pourraient pas être capturées par un modèle linéaire.",
    },
    {
      question: "Qu'est-ce que la validation croisée k-fold ?",
      options: [
        "Une technique pour initialiser les poids d'un réseau de neurones",
        "Une méthode pour combiner plusieurs modèles",
        "Une technique pour évaluer les performances d'un modèle en divisant les données en k sous-ensembles",
        "Un algorithme de clustering qui divise les données en k groupes",
      ],
      correctAnswer: 2,
      difficulty: "Avancé",
      explanation:
        "La validation croisée k-fold est une technique d'évaluation où les données sont divisées en k sous-ensembles. Le modèle est entraîné sur k-1 sous-ensembles et testé sur le sous-ensemble restant, ce processus étant répété k fois.",
    },
    {
      question: "Quelle est la différence entre le bagging et le boosting ?",
      options: [
        "Le bagging utilise des arbres de décision, le boosting utilise des réseaux de neurones",
        "Le bagging entraîne des modèles en parallèle, le boosting les entraîne séquentiellement",
        "Le bagging est supervisé, le boosting est non supervisé",
        "Le bagging est utilisé pour la classification, le boosting pour la régression",
      ],
      correctAnswer: 1,
      difficulty: "Expert",
      explanation:
        "Le bagging (Bootstrap Aggregating) entraîne plusieurs modèles en parallèle sur différents sous-ensembles de données, tandis que le boosting entraîne des modèles séquentiellement, chaque nouveau modèle tentant de corriger les erreurs des précédents.",
    },
    {
      question: "Qu'est-ce que la descente de gradient stochastique (SGD) ?",
      options: [
        "Un algorithme de clustering",
        "Une méthode d'optimisation qui met à jour les paramètres en utilisant un seul exemple à la fois",
        "Une technique de régularisation pour éviter le surapprentissage",
        "Un type de réseau de neurones spécialisé dans la vision par ordinateur",
      ],
      correctAnswer: 1,
      difficulty: "Expert",
      explanation:
        "La descente de gradient stochastique est une méthode d'optimisation qui met à jour les paramètres d'un modèle en utilisant un seul exemple (ou un petit lot) à chaque itération, contrairement à la descente de gradient classique qui utilise l'ensemble des données.",
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
    // Mettre à jour l'indicateur de progression
    currentQuestionSpan.textContent = index + 1
    quizProgress.style.width = `${((index + 1) / quizQuestions.length) * 100}%`

    // Récupérer la question actuelle
    const question = quizQuestions[index]

    // Créer le HTML pour la question
    let questionHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-difficulty ${question.difficulty.toLowerCase()}">${question.difficulty}</span>
                </div>
                <h3>${question.question}</h3>
                <div class="options-container">
        `

    // Ajouter les options
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

    // Insérer le HTML dans le conteneur
    questionContainer.innerHTML = questionHTML

    // Ajouter des écouteurs d'événements aux options
    const optionInputs = questionContainer.querySelectorAll('input[type="radio"]')
    optionInputs.forEach((input) => {
      input.addEventListener("change", function () {
        userAnswers[index] = Number.parseInt(this.value)

        // Mettre à jour la classe selected
        const options = questionContainer.querySelectorAll(".option")
        options.forEach((opt) => opt.classList.remove("selected"))
        this.closest(".option").classList.add("selected")

        // Activer le bouton suivant
        nextQuestionBtn.disabled = false
      })
    })

    // Mettre à jour les boutons de navigation
    prevQuestionBtn.disabled = index === 0

    if (index === quizQuestions.length - 1) {
      nextQuestionBtn.classList.add("hidden")
      submitQuizBtn.classList.remove("hidden")
    } else {
      nextQuestionBtn.classList.remove("hidden")
      submitQuizBtn.classList.add("hidden")
    }

    // Désactiver le bouton suivant si aucune réponse n'est sélectionnée
    nextQuestionBtn.disabled = userAnswers[index] === null
  }

  // Navigation entre les questions
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

  // Soumettre le quiz
  submitQuizBtn.addEventListener("click", () => {
    // Calculer le score
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score++
      }
    })

    // Afficher le score
    finalScoreSpan.textContent = score

    // Définir le message en fonction du score
    if (score <= 3) {
      scoreMessage.textContent =
        "Vous avez encore beaucoup à apprendre sur le Machine Learning. Continuez vos efforts !"
    } else if (score <= 6) {
      scoreMessage.textContent = "Vous avez des connaissances de base en Machine Learning. Continuez à explorer !"
    } else if (score <= 9) {
      scoreMessage.textContent = "Très bon score ! Vous avez une bonne compréhension du Machine Learning."
    } else {
      scoreMessage.textContent = "Score parfait ! Vous êtes un expert en Machine Learning !"
    }

    // Générer les détails des résultats
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

    // Afficher les résultats
    quizContainer.classList.add("hidden")
    resultsContainer.classList.remove("hidden")
  })

  // Recommencer le quiz
  retryQuizBtn.addEventListener("click", () => {
    // Réinitialiser les variables d'état
    currentQuestionIndex = 0
    userAnswers = Array(quizQuestions.length).fill(null)

    // Réinitialiser l'interface
    resultsContainer.classList.add("hidden")
    quizIntro.classList.remove("hidden")
  })
})
