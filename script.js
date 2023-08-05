const quoteContainer = document.getElementById('quotes')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuoteButton = document.getElementById('quote-btn')

const apiUrl = 'https://type.fit/api/quotes'

async function getQuote() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const randomIndex = Math.floor(Math.random() * data.length)
    const quote = data[randomIndex].text
    let author = data[randomIndex].author || 'Unknown'

    author = author.replace('type.fit', '').trim()

    quoteText.textContent = quote
    quoteAuthor.textContent = `- ${author}`
  } catch (error) {
    quoteText.textContent = 'Failed to fetch quote.'
    quoteAuthor.textContent = ''
  }
}
newQuoteButton.addEventListener('click', getQuote)

getQuote()
