export function applyParallax(
  container,
  element,
  intensity = 10,
  initialScale = 1.1
) {
  container.addEventListener('mousemove', (event) => {
    element.style.transition = 'transform 0.25s ease-out';

    const rect = container.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / centerX) * intensity;
    const moveY = ((y - centerY) / centerY) * intensity;

    element.style.transform = `translate(${moveX}px, ${moveY}px)`;

    container.addEventListener('mouseleave', () => {
      element.style.transform = `translate(0, 0) scale(${initialScale})`;
    });
  });
}
