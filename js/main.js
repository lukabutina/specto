document.getElementById("submit-form").addEventListener("click", function(event){
    event.preventDefault()
    var validator = $( "#contactForm" ).validate({
        rules: {
          content: {
            required: true
          },
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          }
        }
    });
    if(validator.form()) {
        console.log($( "#contactForm" ).serializeArray());
    }
    
});