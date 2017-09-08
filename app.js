var array = [];
var getaudio = $('#player')[0];

$('#shuffle').click(function () {
    //Requête ajax des données googlesheet
    $.ajax({
        url: "https://spreadsheets.google.com/feeds/list/" + $('#keyInput').val() + "/od6/public/values?alt=json",
        success: function (data) {
            console.log(data);
            //Boucle set tableau initial
            for (var i = 0; i < 15; i++) {
                array.push([data.feed.entry[i].title.$t, data.feed.entry[i].gsx$url.$t]);
            }
            //var fonction shuffle pour randomize les id tableau
            var array2 = shuffle(array);
            //injection txt + img dans les balises
            for (var i = 0; i < 15; i++) {
                $('#table' + i + '').html(array2[i][0] + '<br><img src="' + array2[i][1] + '">');
            }
            //Lancement zik + boucle
            getaudio.load();
            getaudio.play();
            boucleZik();
            //SlideDown
            if ($('#content').is(":hidden")) {
                $('#content').slideDown(5000);
            };
        }
    });


});

//Fonction pour boucler la zik et danser all night long
function boucleZik() {
    setTimeout(function () {
        getaudio.play();
    }, 32000);
}

//shuffle tableau
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