
const fullStar = `<div class="full-star"><img  src="./img/circle_empty.png" alt="server location"></div> `;

const results = {
  europe: {
    name: "Europe",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  australia: {
    name: "Australia",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  asia: {
    name: "Asia",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  "north-america": {
    name: "North America",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
  },
  "south-america": {
    name: "South America",
    latencyTime: 8,
    downloadTime: 12,
    streaming: "4K, 2160p UHD",
    stars: `${fullStar + fullStar + fullStar + fullStar + fullStar}`,
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
            <td>${results[continent].latencyTime}</td>
            <td>${results[continent].downloadTime}</td>
            <td>${results[continent].streaming}</td>
          </tr>
        </table>`;
}
