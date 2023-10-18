export function handleSelectArea(selectedArea, item) {
  if (selectedArea && selectedArea.id === item.id) {
    return null;
  } else {
    return item;
  }
}
