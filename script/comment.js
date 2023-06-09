import { show_details } from "./movieDetail.js";

export const comment_button = (id) => {
  const comment_name = document.querySelector("#comment-name").value;
  const comment_pwd = document.querySelector("#comment-pwd").value;
  const comment_body = document.querySelector("#comment-body").value;


  if(comment_name.length === 0) {
    alert('닉네임을 입력해 주세요');
  } else if (comment_pwd.length === 0) {
    alert('비밀번호를 입력해 주세요');
  } else if (comment_body.length === 0) {
    alert('리뷰 내용을 입력해 주세요');
  } else {

  const comment_init = [];
  const temp_comment = {
    name: comment_name,
    pwd: comment_pwd,
    comment: comment_body,
  };
  let movieid_comment = JSON.parse(
    window.localStorage.getItem(`${id}_comment`)
  );

  if (!movieid_comment) {
    window.localStorage.setItem(`${id}_comment`, JSON.stringify(comment_init));
    movieid_comment = JSON.parse(window.localStorage.getItem(`${id}_comment`));
    let i = movieid_comment.length;
    movieid_comment[i] = temp_comment;
    window.localStorage.setItem(
      `${id}_comment`,
      JSON.stringify(movieid_comment)
    );
  } else {
    let i = movieid_comment.length;
    movieid_comment[i] = temp_comment;
    console.log(movieid_comment);
    window.localStorage.setItem(
      `${id}_comment`,
      JSON.stringify(movieid_comment)
    );
  }
  show_details(id);
};
}

export const show_comment = (id) => {
  let movieid_comment = JSON.parse(
    window.localStorage.getItem(`${id}_comment`)
  );
  let temp_html = ``;
  movieid_comment.forEach((comment) => {
    temp_html =
      temp_html +
      `<div class="comment">${comment["comment"]} - ${comment["name"]}님</div>`;
  });
  document.querySelector('#movie-review').innerHTML = temp_html
}

export const modify_comment = (id, name) => {
  let movieid_comment = JSON.parse(window.localStorage.getItem(`${id}_comment`))
  movieid_comment.forEach((comment) => {
    comment.includes
  })
}
