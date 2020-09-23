const multiplication = () => {
  for (let i = 3 ; i <= 15 ; i++) {
    for (let y = 1 ; y <= 15 ; y++) {
      console.log(`${i}*${y}=${i*y}`)
    }
  }
}
const BMI = (height, weight) => {
  console.log((weight / (height / 100)**2).toFixed(1))
}