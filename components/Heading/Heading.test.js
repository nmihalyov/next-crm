import Heading from './Heading';

describe('Heading:', () => {
  it('renders h1 element with title', () => {
    const titleText = 'Title';
    const component = shallow(<Heading>{titleText}</Heading>);
    const h1 = component.find('h1');
    const title = h1.text();

    expect(h1).toHaveLength(1);
    expect(title).toBe(titleText);
  });
});