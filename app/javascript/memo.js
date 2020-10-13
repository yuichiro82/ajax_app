function memo(){
  const sumbit = document.getElementById("submit")
  sumbit.addEventListener("click", (e) => {
    const formDate = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true)
    XHR.responseType = "json";
    XHR.send(formDate);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id} >
          <div class="post-date">
            投稿日時：${item.create_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });
}
addEventListener('load',memo)