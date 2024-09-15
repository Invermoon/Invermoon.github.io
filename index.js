function changeContent() {
    const daysOfWeek = {
        0: '',
        1: 'Физика',
        2: 'Информатика',
        3: 'Русская литература',
        4: 'Английский язык',
        5: 'НВТП',
        6: '',
    };

    const today = new Date();
    const dayOfWeek = today.getDay();

    const block = document.getElementById('first');
    block.textContent = daysOfWeek[dayOfWeek];
}

changeContent();
setInterval(changeContent, 3600000); // 3600000 миллисекунд = 1 час
