/* eslint-disable linebreak-style */
import data from './data.js';

window.onload = () => {
  const projectCard = data.map((data) => `
    <section class="work">
      <img ${data.src} alt="Tonic">
      <div>
        <h2>${data.title}</h2>
        <div class="workframe">
          <ul>
            <li><div><h5>${data.company}</h5></div></li>
            <li><div><h5>${data.tech}</h5></div></li>
            <li><div><h5>${data.year}</h5></div></li>
          </ul>
        </div>
        <div class="work-primary-text">
          <p>${data.highlight}<p>
        </div>
        <div class="worktag">
          <ul>
            ${data.lang.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>                        
        </div>
        <div>
          <button type="button" class="button">See Project</button>
        </div>
      </div>
    </section>
`);
  const work = document.querySelector('.work-grid-container');
  const parser = new DOMParser();
  projectCard.forEach((projectString) => {
    const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
    work.append(projectElement);
  });
};
