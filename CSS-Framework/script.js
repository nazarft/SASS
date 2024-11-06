const card = document.getElementById('card');
const div = card.innerHTML;
let content = '';
for (let i = 0; i < 3; i++) {
    content += div;
}
card.innerHTML = content;
