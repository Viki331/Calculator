let inp = document.querySelector(".inpbox");
let btns = document.querySelectorAll(".btns button");

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const btnValue = btn.textContent;

        if (btnValue === 'AC') {
            inp.value = ''; // Clear input box
        } 
        else if (btnValue === '=') {
            try {
                inp.value = eval(inp.value) ; // Evaluate expression
            } catch (error) {
                inp.value = 'Error'; // Handle invalid input
            }
        } 
        else {
            // Append operator or number to display
            inp.value += btnValue;
        }
    });
});
