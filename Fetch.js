var breed;
var doggo;
var dropdown;

function getDogImage(breed)
{
    var baseUrlPart1 = 'https://dog.ceo/api/breed/';
    var baseUrlPart2 = '/hound/images';
    var url = baseUrlPart1 + breed + baseUrlPart2;

    $.ajax({
        url: url,
        success: function(response) {
            console.log(response);
            doggo.attr("src",response.message[0]);
            $('#chosen-breed').text(breed);        
        },
        error: function() {

        }
    })
}

$(document).ready(function() {

    breed = $('#breed');
    doggo = $('#doggo');
    dropdown = $('#breed-list');

    getAllDogBreeds();

    function getAllDogBreeds() {
        var url = 'https://dog.ceo/api/breeds/list';

        $.ajax({
        url: url,
        success: function (response) {
            console.log(response)
            response.message.forEach(function(breed) {
                // append list item
                dropdown.append('<a onclick=getDogImage("' + breed + '") class="dropdown-item">' + breed + '</a>')
            })
        },
        error: function(){
        }
        })
    }

})