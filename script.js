// set the initial count variable

let count = 0;

// select value (span in HTML) and the buttons

// for btn is better to use the querry selector instead of selecting separately, because we will use the same event listener but with different value

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// with console.log you will get a Node.list (all buttons selected) which is array like (for each can be used) and some array methods cannot be used on Node.list and needs to be transformed into arrays
// console.log(btns);

// run forEach to add event listener for each button

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // if is to understant on which button I am clicking by checking the class
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    }
    // in this case only if is known that there are 3 btns, otherwise can be done as above
    else {
      count = 0;
    }

    // change the color of the text
    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
