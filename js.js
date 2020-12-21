function door() {
    var doorImage = document.getElementById("doorImage");
    doorExpand();
    //window.location('emeraldimpulse7.github.io');
}

function doorExpand()
{
    var size = doorImage.height;
    if(size <= 4000)
        doorImage.height = size+1;
        doorImage.width = size+1;
        setTimeout(doorExpand(), 30);
    }
}
