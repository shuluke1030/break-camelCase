function solution(string) {
    let arr = string.split('');
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] >= 'A' && arr[i] <= 'Z') {
        arr.splice(i, 0, ' ');
      }
    }
    return arr.join('')
}
console.log(solution('camelCasingTest'));