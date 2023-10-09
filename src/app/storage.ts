export function setStorageId(id: number): void {
  localStorage.setItem('idThanatus', id.toString());
}

export function getStorageId(): number {
  const id = localStorage.getItem('idThanatus');
  if (id) {
    return parseInt(id, 10);
  } else {
    return 0;
  }
}
