function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

let playing = false;
function togglePlay() {
  const fill = document.getElementById('audioFill');
  if (!playing) {
    fill.style.width = '70%';
    playing = true;
  } else {
    fill.style.width = '0%';
    playing = false;
  }
}

function toggleFurigana() {
  alert('假名顯示切換（原型示意）');
}

function finishTest() {
  alert('測試完成！建議從 Stage 1 開始。');
  goTo('home');
}
