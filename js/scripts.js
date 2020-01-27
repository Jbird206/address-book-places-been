
  $(document).ready(function(){

    // Business Logic for Places ---------
function PlacesBeen() {
    this.places = [];
    this.placeId = 0;
}

PlacesBeen.prototype.addPlace = function(place) {
    place.placeId = this.assignId();
    this.places.push(place);
}

PlacesBeen.prototype.assignId = function() {
    this.placeId += 1;
    return this.placeId;
}

PlacesBeen.prototype.findPlace = function(placeId) {
    for (var i=0; i< this.places.length; i++) {
        if (this.places[i]) {
            if (this.places[i].placeId == placeId) {
                return this.places[i];
            }
        }
    };
    return false;
}  

PlacesBeen.prototype.deletePlace = function(placeId) {
    for (var i=0; i< this.places.length; i++) {
      if (this.places[i].placeId == placeId) {
        delete this.places[i];
        return true;
      }
    };
    return false;
  }

  
  // Business Logic for Places --------- (constructor)
  function Place(name, landmark, date) {
    this.name = name;
    this.landmark = landmark;
    this.date = date;
  }
  
  //user logic
  //document.getElementById("output1").innerHTML = flavor;




  var newPlaces = new PlacesBeen();

    $("#inputBtn").click(function(event){
        event.preventDefault();

        var name = $("#name").val();
        var landmark = $("#landmark").val();
        var date = $("#date").val();




        var newPlace = new Place(name, landmark, date)

        newPlaces.addPlace(newPlace)

        for (let property in newPlaces) {
            console.log(property)
        }

        console.log(newPlace)
        console.log(newPlaces)
        console.log(newPlace.name)
        console.log(newPlace.landmark)
        console.log(newPlace.date)
        console.log(newPlace.placeId)


            $("#result").show();
            $("#result").text(name)
            $("#result").text(landmark)
            $("#result").click(function() {
                
                $("#result").text(date)

            })
        
    })

}) // jquery end
   