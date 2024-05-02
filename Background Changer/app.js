const colorBtns = document.querySelectorAll("button");
const body = document.body;

colorBtns.forEach((Btn) => {
        Btn.addEventListener("click", () => {
            let color = Btn.className;
            changeBackground(color);
        });
    });

function changeBackground(color) {
    body.className = "";

    switch(color) {
        case"purple":
            body.classList.add("purple");
            break;
        case"blue":
             body.classList.add("blue");
            break;
        case"red":
            body.classList.add("red");
            break;
        case"green":
            body.classList.add("green");
            break;
        case"yellow":
            body.classList.add("yellow");
            break;
        case"teal":
            body.classList.add("teal");
            break;
        default:
            break;
        }
    }

