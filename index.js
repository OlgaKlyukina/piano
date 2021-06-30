var numberOfPianoButtons = document.querySelectorAll(".key").length;

for (let i = 0; i < numberOfPianoButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var keyInnerHTML = this.innerHTML;
    let lowKey = keyInnerHTML.toLowerCase();

    makeSound(lowKey);
    keyAnimation(keyInnerHTML);
  })
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  keyAnimation(event.key);
});



function keyAnimation(currentKey) {
if (currentKey === ";") {
  var activeKey = document.querySelector(".Z");
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
} else {
let upKey = currentKey.toUpperCase();
  var activeKey = document.querySelector("." + upKey);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
}



function makeSound(key) {

  switch (key) {
    case "a":
      let a = new Audio("sounds/a.wav");
      a.play();
      break;

    case "w":
      let w = new Audio("sounds/w.wav");
      w.play();
      break;

      case "s":
        let s = new Audio("sounds/s.wav");
        s.play();
        break;

      case "e":
        let e = new Audio("sounds/e.wav");
        e.play();
        break;

        case "d":
          let d = new Audio("sounds/d.wav");
          d.play();
          break;

        case "f":
          let f = new Audio("sounds/f.wav");
          f.play();
          break;

          case "t":
            let t = new Audio("sounds/t.wav");
            t.play();
            break;

          case "g":
            let g = new Audio("sounds/g.wav");
            g.play();
            break;

            case "y":
              let y = new Audio("sounds/y.wav");
              y.play();
              break;

            case "h":
              let h = new Audio("sounds/h.wav");
              h.play();
              break;

              case "u":
                let u = new Audio("sounds/u.wav");
                u.play();
                break;

              case "j":
                let j = new Audio("sounds/j.wav");
                j.play();
                break;

                case "k":
                  let k = new Audio("sounds/k.wav");
                  k.play();
                  break;

                case "o":
                  let o = new Audio("sounds/o.wav");
                  o.play();
                  break;

                  case "l":
                    let l = new Audio("sounds/l.wav");
                    l.play();
                    break;

                  case "p":
                    let p = new Audio("sounds/p.wav");
                    p.play();
                    break;

                    case ";":
                      let last = new Audio("sounds/last.wav");
                      last.play();
                      break;

    default: console.log(key);

  }
}
