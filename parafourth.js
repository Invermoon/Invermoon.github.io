function changeContent() {
    const daysOfWeek = {
        0: 'Выходной',
        1: 'Физическая культура',
        2: 'История Казахстана',
        3: 'Кураторский час',
        4: 'Графика и проектирование',
        5: '',
        6: 'Выходной',
    };

    const today = new Date();
    const dayOfWeek = today.getDay();

    const block = document.getElementById('fourth');
    block.textContent = daysOfWeek[dayOfWeek];
}

changeContent();
setInterval(changeContent, 3600000); // 4 пара
