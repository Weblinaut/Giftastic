$('document').ready(function(){

    var topics = ["airplanes", "helicopters", "rockets", "satellites"];

    function buttonLoad(term) {
        var btn = $('#buttons');
        var html = "<button id='"+term+"'>"+ term +"</button>";
        btn.append(html)
    };

    function fetchGiphy(search) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key=dc6zaTOxFJmzC&limit=10";
        $.get(queryURL).done(function(response) {
            $('#images').html('');
            response.data.forEach(function(item) {
                $('#images').append('<img src="'+item.images.fixed_width.url+'">')
            })
        });
    }

    topics.forEach(function(item) {
        buttonLoad(item);
    })

     $('#userInput').submit(function(evt) {
         evt.preventDefault();
         var searchTerm = $('#searchTerm').val().trim();
         topics.push(searchTerm);
         buttonLoad(searchTerm);
         $('#searchTerm').val('');
     });

    $('#buttons').click(function(evt) {
        var text = $(evt.srcElement).text();
        fetchGiphy(text);
    })
});


