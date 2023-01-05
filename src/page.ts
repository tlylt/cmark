import { CMark } from '.';

const sampleText = `_Foo_ **bar**`;

const page = document.getElementById('page');

if (page) {
  const tokens = new CMark().tokenize(sampleText);
  page.innerHTML = tokens
    .map((token) => `<li>${token.type}: ${token.value}</li>`)
    .join('');
}
