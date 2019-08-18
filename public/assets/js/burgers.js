
    //CREATE A NEW BURGER
    // $(".create-form").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();
    //   });

    //MOVE BURGER TO DEVOURED COLUMN
    $('.change-devoured').on("click", function(event){
        alert("you made it")


        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log(id, newDevoured);
    })
