// @todo: Функция создания карточки
function createCard(cardData, DeleteCard) {
    // @todo: Темплейт карточки + клонировать шаблон
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    // @todo: DOM узлы
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    // установить значения вложенных элементов
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    // Добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
    deleteButton.addEventListener("click", function () {
        DeleteCard(cardElement);
    });

    return cardElement;
}

// @todo: Функция удаления карточки
function DeleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
const placesList = document.querySelector(".places__list");

initialCards.forEach((cardData) => {
    const newCard = createCard(cardData, DeleteCard);
    placesList.append(newCard);
});
