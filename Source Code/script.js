const container = document.querySelector('.bubble-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 20 + 20; // size between 20px and 40px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random horizontal position
  const posXPercent = Math.random() * 100;
  bubble.style.left = `${posXPercent}%`;

  container.appendChild(bubble);
  animateBubble(bubble, size);
}

function animateBubble(bubble, size) {
  const floatDistance = Math.random() * 300 + 200; // float up between 200-500px
  const duration = Math.random() * 4000 + 4000; // 4-8 seconds

  // Animate upward and fade in
  const upwardAnimation = bubble.animate([
    {
      transform: 'translateY(0) scale(0.8)',
      opacity: 0
    },
    {
      transform: `translateY(-${floatDistance}px) scale(1.2)`,
      opacity: 1
    }
  ], {
    duration: duration,
    easing: 'ease-out',
    fill: 'forwards'
  });

  // Bubble pops at the end
  upwardAnimation.onfinish = () => {
    popBubble(bubble);
  };
}

function popBubble(bubble) {
  const popSize = Math.random() * 20 + 20; // pop size variation
  const popDuration = 600; // duration of pop

  // Animate pop (expanding and fading out quickly)
  const popAnim = bubble.animate([
    {
      transform: 'scale(1)',
      opacity: 1
    },
    {
      transform: `scale(2.5)`,
      opacity: 0
    }
  ], {
    duration: popDuration,
    easing: 'ease-out',
    fill: 'forwards'
  });

  popAnim.onfinish = () => {
    bubble.remove();
  };
}

// Generate bubbles continuously
setInterval(createBubble, 300);

// Create some initial bubbles for immediate effect
for (let i = 0; i < 20; i++) {
  createBubble();
}