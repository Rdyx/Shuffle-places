var array = [];

$.ajax({
    url: "https://spreadsheets.google.com/feeds/list/YOUR_KEY/od6/public/values?alt=json",
    success: function (data) {
        console.log(data);
        for (var i = 0; i < 15; i++) {
            array.push([data.feed.entry[i].title.$t,data.feed.entry[i].gsx$url.$t]);
            $('#table' + i + '').html(array[i][0] + '<br><img src="'+array[i][1]+'">');
        }
        console.log(array)
    }
})

$('#shuffle').click(function () {
    var array2 = shuffle(array);
    for (var i = 0; i < 15; i++) {
        $('#table' + i + '').html(array2[i][0] + '<br><img src="'+array2[i][1]+'">');
    }
});



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Tant qu'il reste des éléments du tableau non shuffle
    while (0 !== currentIndex) {

        //Sélectionne un élément restant
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Et swap avec l'élément actuel
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

