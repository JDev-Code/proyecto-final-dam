// Quita los saltos de linea y espacios al principio y finald de un texto
function formatText (txt) {
  return txt.replace(/^\s+|\s+$/g, '')
}

export default formatText