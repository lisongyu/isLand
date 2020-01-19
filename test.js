function fn1() {
  fn2()
}
async function fn2() {
  try {
    await fn3()
  } catch (error) {
    console.log('error')
  }
  
}
function fn3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const r = Math.random();
      console.log(r)
      if (r < 0.5) {
        reject('eror')
      }
    
    })
    
  })
 
}
fn1()