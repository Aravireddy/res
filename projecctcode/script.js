
    const cursor = document.getElementById("cursor");
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - 40;
      mouseY = e.clientY - 40;
    });

    function animateCursor() {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(animateCursor);
    }

    animateCursor();