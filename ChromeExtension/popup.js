document.getElementById('saveButton').addEventListener('click', function() {
    var button = document.getElementById('saveButton')
    var text = document.getElementById('textInput').value
    // Отключаем обработчики событий для изменения цвета фона при наведении
    button.onmouseover = null
    button.onmouseleave = null
    // Сохраняем текст в локальное хранилище
    chrome.storage.local.set({ 'saveTokenKinopoisk': text }, function() {
        // Оповещаем пользователя о сохранении
        button.innerHTML = 'Токен сохранен'
        button.style.backgroundColor = '#4CAF50' // Зеленый цвет фона
        button.style.animation = 'savedEffect 3s ease-in-out'
        // Очищаем поле ввода текста
        textInput.value = ''
        // Убираем эффект через 3 секунды и возвращаем исходный цвет и эффекты
        setTimeout(function() {
            button.innerHTML = 'Сохранить'
            button.style.backgroundColor = '#ff6600cb' // Возвращаем исходный цвет фона
            // Включаем обработчики событий для изменения цвета фона при наведении 
            button.onmouseover = function() {
                button.style.backgroundColor = '#ff6600'
            }
            button.onmouseleave = function() {
                button.style.backgroundColor = '#ff6600cb'
            }
        }, 3000)
    })
})

// Получаем все ссылки на странице
var links = document.querySelectorAll('a')
// Добавляем обработчик события для каждой ссылки
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Отменяем стандартное действие ссылки
        event.preventDefault()
        // Получаем URL, на который ссылается ссылка
        var url = link.href
        // Открываем этот URL в новой вкладке
        chrome.tabs.create({ url: url })
    })
})

// Забираем элементы кнопок Настройки и Начало и контейнеры их состояний
var settingsButton = document.getElementById('settingsButton');
var homeButton = document.getElementById('homeButton');
var settingsState = document.getElementById('settingsState');
var homeState = document.getElementById('homeState');
// Обработчик события для кнопки "Настройки"
settingsButton.addEventListener('click', function() {
    homeState.style.display = 'none'; // Скрываем начальное состояние
    settingsState.style.display = 'block'; // Отображаем состояние настроек
});
// Обработчик события для кнопки "Начало"
homeButton.addEventListener('click', function() {
    settingsState.style.display = 'none'; // Скрываем состояние настроек
    homeState.style.display = 'block'; // Отображаем начальное состояние
});

// Забираем все CheckBox
var KinoboxCheckBox = document.getElementById('KinoboxCheckBox');
var YouTubeCheckBox = document.getElementById('YouTubeCheckBox');
var WikiCheckBox = document.getElementById('WikiCheckBox');
var DbEnCheckBox = document.getElementById('DbEnCheckBox');
var DbRuCheckBox = document.getElementById('DbRuCheckBox');
var TorrentCheckBox = document.getElementById('TorrentCheckBox');

// При загрузке страницы, загружаем значение из chrome.storage и устанавливаем его для чекбокса
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('KinoboxCheckBox', function(data) {
        // Если значение не найдено, устанавливаем значение по умолчанию (включеноы)
        if (typeof data.KinoboxCheckBox === 'undefined') {
            KinoboxCheckBox.checked = true;
            // Сохраняем значение по умолчанию в хранилище
            chrome.storage.local.set({ 'KinoboxCheckBox': true });
        } else {
            KinoboxCheckBox.checked = data.KinoboxCheckBox;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('YouTubeCheckBox', function(data) {
        if (typeof data.YouTubeCheckBox === 'undefined') {
            YouTubeCheckBox.checked = true;
            chrome.storage.local.set({ 'YouTubeCheckBox': true });
        } else {
            YouTubeCheckBox.checked = data.YouTubeCheckBox;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('WikiCheckBox', function(data) {
        if (typeof data.WikiCheckBox === 'undefined') {
            WikiCheckBox.checked = true;
            chrome.storage.local.set({ 'WikiCheckBox': true });
        } else {
            WikiCheckBox.checked = data.WikiCheckBox;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('DbEnCheckBox', function(data) {
        if (typeof data.DbEnCheckBox === 'undefined') {
            DbEnCheckBox.checked = true;
            chrome.storage.local.set({ 'DbEnCheckBox': true });
        } else {
            DbEnCheckBox.checked = data.DbEnCheckBox;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('DbRuCheckBox', function(data) {
        if (typeof data.DbRuCheckBox === 'undefined') {
            DbRuCheckBox.checked = true;
            chrome.storage.local.set({ 'DbRuCheckBox': true });
        } else {
            DbRuCheckBox.checked = data.DbRuCheckBox;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('TorrentCheckBox', function(data) {
        if (typeof data.TorrentCheckBox === 'undefined') {
            TorrentCheckBox.checked = true;
            chrome.storage.local.set({ 'TorrentCheckBox': true });
        } else {
            TorrentCheckBox.checked = data.TorrentCheckBox;
        }
    });
});

// При изменении состояния чекбокса сохраняем состояние чекбокса в chrome.storage
KinoboxCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'KinoboxCheckBox': this.checked });
});
YouTubeCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'YouTubeCheckBox': this.checked });
});
WikiCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'WikiCheckBox': this.checked });
});
DbEnCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'DbEnCheckBox': this.checked });
});
DbRuCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'DbRuCheckBox': this.checked });
});
TorrentCheckBox.addEventListener('change', function() {
    chrome.storage.local.set({ 'TorrentCheckBox': this.checked });
});