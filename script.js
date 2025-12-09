// Создание падающего снега
document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.getElementById('snow-container');
  const snowflakeCount = 60;

  for (let i = 0; i < snowflakeCount; i++) {
    const snow = document.createElement('div');
    snow.innerHTML = '❄';
    snow.classList.add('snowflake');
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snow.style.opacity = Math.random() * 0.7 + 0.3;
    snow.style.fontSize = (Math.random() * 1 + 1) + 'em';
    snowContainer.appendChild(snow);
  }

  // Обработка отправки письма
  const sendBtn = document.getElementById('send-btn');
  const letterInput = document.getElementById('letter');

  sendBtn.addEventListener('click', () => {
    const letter = letterInput.value.trim();
    if (letter === '') {
      alert('Пожалуйста, напиши письмо Дедушке Морозу!');
      return;
    }
    alert('Письмо отправлено в Великий Устюг! 🎅\nДедушка Мороз обязательно его прочтёт!');
    letterInput.value = '';
  });
});
