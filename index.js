const dodger = document.getElementById("dodger")

dodger.style.backgroundColor = 'lime'

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.which === 39) {
      moveDodgerRight()
    }
  })

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }
