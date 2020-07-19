export function setPhones(phones) {
  return {
    type: 'SET_PHONES',
    phones,
  };
}

export function changeStatusPhone(phone) {
  return {
    type: 'CHANGE_STATUS',
    phone,
  };
}
