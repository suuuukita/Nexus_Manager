document.addEventListener("DOMContentLoaded", () => {
    const calendarioDates = document.getElementById("calendario-dates");
    const currentMonth = document.getElementById("current-month");
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");

    let date = new Date();
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function renderCalendar() {
        const year = date.getFullYear();
        const month = date.getMonth();
        currentMonth.textContent = `${months[month]} ${year}`;

        // Limpar os dias antigos
        calendarioDates.innerHTML = "";

        // Obter o primeiro dia do mês e o número de dias no mês
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Preencher os dias do mês
        for (let i = 0; i < firstDayIndex; i++) {
            calendarioDates.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = i;
            dayElement.addEventListener("click", () => {
                document.querySelectorAll(".calendario-dates div").forEach(el => el.classList.remove("active"));
                dayElement.classList.add("active");
            });
            calendarioDates.appendChild(dayElement);
        }
    }

    prevMonthButton.addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
