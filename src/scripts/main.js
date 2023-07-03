const adviceCaption = document.querySelector(".adviceCaption");
const adviceContext = document.querySelector(".adviceContext");
const fetchBtn = document.querySelector(".fetchBtn");

const api_link = "https://api.adviceslip.com/advice";

const fetchNewAdvice = async () => {
    const response = await fetch(api_link);
    const data = await response.json();
    return data;
}

const renderAdvice = (adviceObject) => {
    const {id,advice} = adviceObject;
    adviceCaption.textContent = `ADVICE #${id}`;
    adviceContext.textContent =  advice;
}

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice();
    const advice = data.slip;
    renderAdvice(advice);
    disableBtn();
}

const disableBtn = () => {
    fetchBtn.disabled = true;
    fetchBtn.classList.add("disabled");
    setTimeout(() => {
        fetchBtn.disabled = false;
        fetchBtn.classList.remove("disabled");
    }, 2000);
}

window.addEventListener("DOMContentLoaded",() => {
    fetchBtn.addEventListener("click",generateNewAdvice);
}); 
