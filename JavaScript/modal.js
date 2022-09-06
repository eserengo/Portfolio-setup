/* eslint-disable linebreak-style */

const cards = document.querySelectorAll('.work');
const cardProp = [];

function CardObject(
  title,
  timeline,
  picture,
  description,
  technology,
  liveURL,
  sourceURL,
) {
  this.title = title;
  this.timeline = timeline;
  this.picture = picture;
  this.description = description;
  this.technology = technology;
  this.liveURL = liveURL;
  this.sourceURL = sourceURL;
}

for (let index = 0; index < cards.length; index += 1) {
  const title = cards[index].querySelector('.work-header').innerText;
  const timeline = cards[index].querySelector('.workframe').innerHTML;
  const picture = cards[index].querySelector('.img-container').src;
  const description = cards[index].querySelector('.work-primary-text').innerText;
  const technology = cards[index].querySelector('.worktag').innerHTML;
  const liveURL = 'https://eserengo.github.io/Portfolio-setup/';
  const sourceURL = 'https://github.com/eserengo/Portfolio-setup';

  cardProp.push(
    new CardObject(
      title,
      timeline,
      picture,
      description,
      technology,
      liveURL,
      sourceURL,
    ),
  );
}

const modalButton = document.querySelectorAll('.see');
const modal = document.querySelector('.modal-container');
const closeModal = document.getElementById('close-modal');
for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].setAttribute('data-index', index);
  modalButton[index].addEventListener('click', (e) => {
    const pos = e.target.getAttribute('data-index');
    modal.querySelector('.modal-title').innerHTML = cardProp[pos].title;
    modal.querySelector('.timeline').innerHTML = cardProp[pos].timeline;
    modal.querySelector('.img-container').src = cardProp[pos].picture;
    modal.querySelector('.modal-desc').innerHTML = cardProp[pos].description;
    modal.querySelector('.worktag').innerHTML = cardProp[pos].technology;
    modal.querySelector('.live').href = cardProp[pos].liveURL;
    modal.querySelector('.source').href = cardProp[pos].sourceURL;
    modal.style.display = 'block';
  });
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});