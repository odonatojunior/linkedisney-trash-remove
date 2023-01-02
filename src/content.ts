export const INTERACTION_SELECTOR = `
  .scaffold-finite-scroll__content
  div
  div.update-components-header.update-components-header--with-control-menu.update-components-header--with-divider.update-components-header--with-image.t-12.t-black--light.t-normal.pt2
`

export function filterContent() {
  const interaction = document.querySelectorAll(INTERACTION_SELECTOR)
  interaction.forEach((item) => {
    item.parentElement?.remove()
  })
}

document.addEventListener('scroll', () => {
  debounce(filterContent, 500)
})

filterContent()

export function debounce(func: () => void, delay: number) {
  clearTimeout(delay)
  setTimeout(function() {
    func()
  }, delay)
}
