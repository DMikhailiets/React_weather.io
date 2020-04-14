export const requiredField = (value) => {
    console.log(value)
    if(!value) {
        return undefined;
    }
    return 'field is required'
}