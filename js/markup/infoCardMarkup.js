export default function infoCardMarkup(time) {
  return `<div class="info-card">
  <p>Latency : ${time/1000} sec.</p>
</div>`;
}
