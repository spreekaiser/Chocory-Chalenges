export const Button = (text) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = text;

    return button;
};
