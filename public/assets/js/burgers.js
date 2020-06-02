$(function () {
    $(".eatBurger").on("click", function (event) {
        console.log("eat");
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("consumed burger ID", id);
                location.reload();
            }
        );
    });

    $(".orderBurger").on("submit", function (event) {
        event.preventDefault();
        var name = $("#bgr").val().trim();
        console.log("order: " + name);

        var newBurger = {
            name: name,
        };
        console.log(newBurger);

        $("#bgr").val("");

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("ordered burger");
                location.reload();
            }
        );
    });
});