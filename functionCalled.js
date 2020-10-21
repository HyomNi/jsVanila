const title = document.querySelector("#title");

function handleClick() {
    title.style.color = 'blue';
}

title.addEventListener("click", handleClick);

//바로즉시 호출하지않는방법 : 함수호출시 ()를 쓰지않는다.
//바로즉시 호출방법 : 함수호출시 ()를 쓴다.