function buyNow(target) {
    const title = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerHTML = `
        <li> ${title} <span class="remove ml-5 cursor-pointer">-</span> <span class="add cursor-pointer ml-4">+</span></li>
    `
    document.querySelector('#parent-container').appendChild(li);
}