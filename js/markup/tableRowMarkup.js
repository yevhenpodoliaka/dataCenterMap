function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function tableRowMarkup(continent) {
    const streamingArr = ["4K, 2160p UHD", "1080, FullHD"];

    const latencyTime = random(5, 25).toFixed(2);
    const downloadTime = random(8, 25).toFixed(2);
    const streaming = streamingArr[Math.floor(random(1, 2))];


    return `  <table>
          <tr>
            <th colspan="2">${continent}</th>
            <th>5stars</th>
          </tr>
          <tr>
            <td>Latency</td>
            <td>Download</td>
            <td>streaming</td>
          </tr>
          <tr>
            <td>${latencyTime}</td>
            <td>${downloadTime}</td>
            <td>${streaming}</td>
          </tr>
        </table>`;
}
