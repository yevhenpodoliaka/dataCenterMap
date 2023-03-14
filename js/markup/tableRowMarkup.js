const star =  `<div class="star"><img  src="./img/star2.png" alt="rating"></div> `;
const fullStar = `<div class="star"><img  src="./img/fill-star.png" alt="rating"></div> `;

const results = {
  europe: {
    name: "Europe",
    latencyTime: 5,
    downloadTime: 8,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  australia: {
    name: "Australia",
    latencyTime: 8,
    downloadTime: 10,
    streaming: "1080, FullHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + star}`,
  },
  asia: {
    name: "Asia",
    latencyTime: 10,
    downloadTime: 15,
    streaming: "1080, FullHD",
    stars: `${fullStar + fullStar + fullStar + star + star}`,
  },
  "north-america": {
    name: "North America",
    latencyTime: 4,
    downloadTime: 6,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  "south-america": {
    name: "South America",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + star}`,
  },
};

export default function tableRowMarkup(continent) {
  return `  <table>
          <tr>
            <th colspan="2">${results[continent].name}</th>
            <th class="stars">${results[continent].stars}</th>
          </tr>
          <tr>
            <td>Latency</td>
            <td>Download</td>
            <td>streaming</td>
          </tr>
          <tr>
            <td>${results[continent].latencyTime} sec.</td>
            <td>${results[continent].downloadTime} sec.</td>
            <td>${results[continent].streaming}</td>
          </tr>
        </table>`;
}
