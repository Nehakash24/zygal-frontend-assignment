       function generateBoxes() {
        var inputNumber = document.getElementById("inputNumber").value;
        var boxesContainer = document.getElementById("boxesContainer");
        boxesContainer.innerHTML = "";

        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;

        if (inputNumber == 1) {
          var box = document.createElement("div");
          box.className = "box";
          box.style.width = "50%";
          box.style.height = "50%";
          box.style.top = "50%";
          box.style.left = "0";

          boxesContainer.appendChild(box);
        } else {
          // Calculate box size based on the number of boxes
          var boxSizeX = screenWidth / inputNumber;
          var boxSizeY = (screenHeight * 0.75) / inputNumber; // Assuming a 4:3 aspect ratio

          for (var i = 0; i < inputNumber; i++) {
            var box = document.createElement("div");
            box.className = "box";
            box.style.width = boxSizeX + "px";
            box.style.height = boxSizeY + "px";

            // Calculate position starting from the bottom-left corner
            var positionX = i * boxSizeX;
            var positionY = screenHeight - (i + 1) * boxSizeY;

            // Set position based on the calculated values
            box.style.top = positionY + "px";
            box.style.left = positionX + "px";

            boxesContainer.appendChild(box);
          }
        }
      }
 