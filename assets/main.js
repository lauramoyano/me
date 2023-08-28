const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDleygkMY7ypyi4Bsy5en5A&part=snippet%2Cid&order=date&maxResults=3';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '236e289c00mshe7960f6773b4260p120994jsn2e173e710267',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json(); // Parse response as JSON
  return data;
}

(async () => {
  try {
    const videosData = await fetchData(API);
    const videos = videosData.items;
    let view = `
      ${videos.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
