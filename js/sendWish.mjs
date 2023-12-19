import { navToSuccess } from "./succOrErr.mjs";
import { throwError } from "./succOrErr.mjs";

function submitData() {
    const emailValue = document.getElementById('mail').value;
    const textValue = document.getElementById('wishText').value;
    const email = document.getElementById('mail');
    const text = document.getElementById('wishText');

    if (emailValue.trim() === '') {
        email.classList.add("input-err");
        setTimeout(() => { email.classList.remove("input-err") }, 2000);
        return;
    }
    
    if (textValue.trim() === '') {
        text.classList.add("input-err");
        setTimeout(() => { text.classList.remove("input-err") }, 2000);
        return;
    }

    fetch('#', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailValue, textValue }),
    })
    .then(response => response.text())
    .then(data => {
        navToSuccess();
    })
    .catch(error => {
        throwError();
    });
}

export { submitData }