fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').catch(console.log)

//console.log(fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'));

/*
  fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
    .then(res => res.json())
    .then(console.log).catch(error =>
    {
        console.log('error123', error)
        return error;
    }).finally(res => console.log('FINALLY', res))


    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(res => res).then(res => res).then(res => res).then(res => res).then(res => res).then(res => res).then(console.log).catch(error =>
    {
        console.log('error123', error)
        return error;
    }).finally(res => console.log('FINALLY', res))
*/

const asyncFetch = async () => {
  let result;
  console.log('1')
  console.log('result, ', result)
  await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(() => {
    console.log('2')
    result = '2'
  })
  console.log('3')
  console.log('result, ', result) /** с await вывод: 2, без await вывод: undefined, т.к фетч не успеет завершиться */

  return result;
}

const asyncSum = async () => {
  console.log('1a')
  console.log('2a')
  console.log('3a')
}

const async1 = async () => {
  asyncFetch();
  asyncSum();
}

async1();
