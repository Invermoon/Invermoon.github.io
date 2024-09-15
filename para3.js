function changeContent() {
    const daysOfWeek = {
        0: 'Выходной',
        1: 'География',
        2: 'Биология',
        3: 'Химия',
        4: 'Русский язык',
        5: 'Всемирная история',
        6: 'Выходной',
    };

    const today = new Date();
    const dayOfWeek = today.getDay();

    const block = document.getElementById('third');
    block.textContent = daysOfWeek[dayOfWeek];
}

changeContent();
setInterval(changeContent, 3600000); // 3 пара
