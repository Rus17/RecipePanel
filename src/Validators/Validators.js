export const required = value => {
    if (value) return undefined;
    return "Это поле обязательное";
}

export const minTitle = value => {
  if(value && value.length < 3) return "Это поле не может быть меньше 3-х символов"
  return undefined
}


export const minText = value => {
  if(value && value.length < 10) return "Это поле не может быть меньше 10-ти символов"
  return undefined
}
