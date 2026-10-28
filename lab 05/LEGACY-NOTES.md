jQuery calls and native equivalents
jQuery	Native JavaScript
$("#id")	document.querySelector("#id")
$(".class")	document.querySelectorAll(".class")
$(element).text("Hello")	element.textContent = "Hello"
$(element).val()	element.value
$(element).addClass("error")	element.classList.add("error")
$(element).on("click", handler)	element.addEventListener("click", handler)

Three legacy smells
    1. Unnecessary dependency on jQuery for simple DOM operations.
    2. Mixing legacy libraries with modern native JavaScript.
    3. Loading JavaScript dependencies globally when they are not required.
