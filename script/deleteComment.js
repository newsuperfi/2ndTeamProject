export function comment_delete(event,id ,pwd) {
    const li = event.target.parentElement
    const comment = JSON.parse(window.localStorage.getItem(`${id}_comment`))
    li.remove()
}