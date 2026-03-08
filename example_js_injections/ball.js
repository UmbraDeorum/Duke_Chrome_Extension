(function() {
  console.log('Jumping ball script started');

  function startAnimation() {
    // Create canvas and ensure it's visible
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    canvas.style.border = '3px solid #333';
    canvas.style.backgroundColor = '#f0f0f0';
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';
    canvas.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Ball properties
    const radius = 20;
    let x = radius + 50;          // start near left edge
    let y = radius + 50;          // start near top
    let dx = 3;                   // horizontal speed
    let dy = 2;                   // vertical speed
    const gravity = 0.2;
    const bounceFactor = 0.8;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply gravity
      dy += gravity;

      // Update position
      x += dx;
      y += dy;

      // Wall collisions (left/right)
      if (x + radius > canvas.width) {
        x = canvas.width - radius;
        dx = -dx * bounceFactor;
      } else if (x - radius < 0) {
        x = radius;
        dx = -dx * bounceFactor;
      }

      // Floor/ceiling collisions
      if (y + radius > canvas.height) {
        y = canvas.height - radius;
        dy = -dy * bounceFactor;
      } else if (y - radius < 0) {
        y = radius;
        dy = -dy * bounceFactor;
      }

      // Draw ball
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ff5722';
      ctx.shadowColor = '#999';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    }

    animate();
    console.log('Canvas added and animation started');
  }

  // If body already exists, start immediately; otherwise wait for DOM
  if (document.body) {
    startAnimation();
  } else {
    document.addEventListener('DOMContentLoaded', startAnimation);
  }
})();
