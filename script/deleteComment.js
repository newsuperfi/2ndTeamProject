export function comment_delete(event,id ,pwd) {
    const li = event.target.parentElement
    const comment = JSON.parse(window.localStorage.getItem(`${id}_comment`))
    const newComment = comment.filter(comment => comment.pwd !== pwd)
    
    window.localStorage.removeItem(`${id}_comment`)
    window.localStorage.setItem(`${id}_comment`, JSON.stringify(newComment))
    li.remove()
}