import Popover from '../popover';

describe('Popover class', () => {
  let popover;

  beforeEach(() => {
    popover = new Popover();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should show and remove a popover', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    const headerText = 'Header Text';
    const bodyText = 'Body Text';

    const id = popover.showPopover(headerText, bodyText, element);
    expect(popover.popovers.length).toBe(1);

    expect(document.querySelector('.popover')).toBeTruthy();

    popover.removePopover(id);
    expect(popover.popovers.length).toBe(0);
    expect(document.querySelector('.popover')).toBeFalsy();
  });
});
