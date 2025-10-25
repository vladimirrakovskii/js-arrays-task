// BEGIN
export default function buildDefinitionList(definitions) {
  if (!definitions || definitions.length === 0) {
    return '';
  }

  let result = '<dl>';

  for (let i = 0; i < definitions.length; i++) {
    const [term, description] = definitions[i];
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  }

  result += '</dl>';

  return result;
}
// END
