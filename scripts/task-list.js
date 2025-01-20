document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    draggedItem = item;
    setTimeout(() => item.style.display = 'none', 0);
  });
});


document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('dragend', (e) => {
    setTimeout(() => {
      item.style.display = 'flex';
      draggedItem = null;
    }, 0);
  });
});



document.querySelectorAll('.column').forEach((column) => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});


document.querySelectorAll('.column').forEach((column) => {
  column.addEventListener('drop', (e) => {
    if (draggedItem) {
      column.appendChild(draggedItem);
    }
  });
});
