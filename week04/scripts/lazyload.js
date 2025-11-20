const currentYear = document.getElementById('currentYear')

const year = new Date().getFullYear()

currentYear.textContent = year

const dateModified = document.getElementById('lastModified')

const date = new Date()
lastModified.textContent = `Last modification: ${document.lastModified}`

