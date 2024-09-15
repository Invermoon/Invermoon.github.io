function changeContent() {
    const daysOfWeek = {
        0: 'Выходной',
        1: 'Русский язык',
        2: 'КЯиЛ',
        3: 'Математика',
        4: 'Физическая культура',
        5: 'Математика',
        6: 'Выходной',
    };

    const today = new Date();
    const dayOfWeek = today.getDay();

    const block = document.getElementById('second');
    block.textContent = daysOfWeek[dayOfWeek];
}

changeContent();
setInterval(changeContent, 3600000); // 2 пара
