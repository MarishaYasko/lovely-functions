// generate random id

function generateRandomElemId(identicatorName, idLength) {
    const id = [];
    for (let i = 0; i < idLength; i++) {
      id.push(Math.ceil(Math.random() * 100 * i));
    }
    return identicatorName + id.join('');
}

// choice one item from array
function choiceOneElemFromArray(items, id) {
    let choice = null;
    items.forEach(one => {
       if (one.id === id) {
          choice = one;
       }
    }
    return choice;
}
