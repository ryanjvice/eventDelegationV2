$(function() {
    //This adds a new "pet" to the list//
    $("button").click(function(event) {
        $("ul").append(
            "<li>" +
            ["cat", "dog", "rock"][Math.floor(Math.random()*3)] 
            + "</li>"
        );
    });

    //This removes a "pet" from the list//
    $('ul').on('click', 'li', function(event) {
        this.remove();
    });
});