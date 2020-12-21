function door() {
    var doorImage = document.getElementById("doorImage");
    var size = doorImage.height;
    var loop1;
    for (loop1 = size; loop1 < 4001; loop1++) {
      doorImage.height = size+loop1;
      doorImage.width = size+loop1;
    }
    window.location('emeraldimpulse7.github.io');
}
