window.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.progress-bar span');
  spans.forEach(span => {
    const percent = span.getAttribute('data-percent');
    span.style.width = percent + '%';
  });
});
