// Filter portfolio
const tabs = document.querySelectorAll('.filter-tab')
const cards = document.querySelectorAll('.project-card[data-category]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    const filter = tab.dataset.filter
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.add('visible')
      } else {
        card.classList.remove('visible')
      }
    })
  })
})

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible')
  })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

// Stagger cards
document.querySelectorAll('.skill-card, .project-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.05}s`
})