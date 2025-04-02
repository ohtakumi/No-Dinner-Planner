document.addEventListener("DOMContentLoaded", function() {
    const calendarElement = document.getElementById('calendar');
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');  // 年度のセレクトボックスを取得
  
    // 現在の年月を取得
    const today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
  
    // カレンダーを作成する関数
    function createCalendar(month, year) {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const totalDays = lastDay.getDate();
      const startDay = firstDay.getDay();
  
      calendarElement.innerHTML = '';
  
      // 曜日の表示
      const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
      weekdays.forEach(day => {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        dayCell.classList.add('weekday');
        calendarElement.appendChild(dayCell);
      });
  
      // 空白セル（前の月の空白部分）
      for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendarElement.appendChild(emptyCell);
      }
  
      // 日付を埋める
      for (let i = 1; i <= totalDays; i++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = i;
        dayCell.classList.add('day');
        dayCell.addEventListener('click', function() {
          dayCell.classList.toggle('selected');
        });
        calendarElement.appendChild(dayCell);
      }
    }
  
    // 初期表示
    createCalendar(currentMonth, currentYear);
  
    // 月を選択した時にカレンダーを更新
    monthSelect.addEventListener('change', function() {
      currentMonth = parseInt(monthSelect.value);
      createCalendar(currentMonth, currentYear);
    });
  
    // 年度を選択した時にカレンダーを更新
    yearSelect.addEventListener('change', function() {
      currentYear = parseInt(yearSelect.value);
      createCalendar(currentMonth, currentYear);
    });
});
