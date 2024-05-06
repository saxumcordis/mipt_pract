const API_KEY = 'live_HC7DMd81VAt5wB5xBi6UYhVMvgpBfMixNCcF630RTnIoM9Ymw2hLJQexnV2K3OKW'

export const initListItems = () => {
  return fetch(`https://api.thecatapi.com/v1/images/search?&api_key=${API_KEY}&has_breeds=1`).then(e => e.json());
}
