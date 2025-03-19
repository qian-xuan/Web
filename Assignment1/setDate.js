const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');

// 生成年份选项
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}

// 生成月份选项
for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    monthSelect.appendChild(option);
}

// 生成日期选项
function generateDays(year, month) {
    daySelect.innerHTML = '';
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

// 初始化年份、月份、日期选项
yearSelect.value = currentYear;
monthSelect.value = new Date().getMonth();
daySelect.value = new Date().getDate();

// 初始化日期选项
generateDays(yearSelect.value, monthSelect.value);

// 当年份或月份改变时，重新生成日期选项
yearSelect.addEventListener('change', () => generateDays(yearSelect.value, monthSelect.value));
monthSelect.addEventListener('change', () => generateDays(yearSelect.value, monthSelect.value));