//header menu sticky
window.onscroll = function() {myFunction()};

const header = document.getElementById("header_scroll_fixed");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header_scroll_sticky");
  } else {
    header.classList.remove("header_scroll_sticky");
  }
}



// JavaScript for disabling form submissions if there are invalid fields
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }, false)
})