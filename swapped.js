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

// insertion sort
export function reverseEntityInsertion(entity: any[]) {
  for (let i = 0; i < entity.length; i++) {
    const next = entity[i + 1];
    if (entity[i] > entity[i + 1]) {
      entity[i + 1] = entity[i];
      entity[i] = next;
      let j = i;
      while (j > 0) {
        j--;
        if (entity[i] < entity[j]) {
          entity[j] = entity[i];
        }
      }
    }
  }
}
// no done
