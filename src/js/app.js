import Popover from './popover';

const popoverFactory = new Popover();
let actualPopovers = [];
const popoverText = 'And here\'s some amazing content. It\'s very engaging. Right?';

const container = document.querySelector('.container');

const showPpv = (headerText, bodyText, el) => {
  actualPopovers.push({
    name: el.name,
    id: popoverFactory.showPopover(headerText, bodyText, el),
  });
};

const onClick = (e) => {
  actualPopovers.forEach((popover) => popoverFactory.removePopover(popover.id));
  actualPopovers = [];

  const { target } = e;
  if (target.classList.contains('btn')) {
    showPpv('Popover title', popoverText, target);
  }
};

window.addEventListener('click', onClick);

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Click to toggle popover';
button.classList.add('btn', 'btn-lg', 'btn-danger');

const tasks = container.querySelectorAll('.task');
const task1 = tasks[0];
task1.appendChild(button);
