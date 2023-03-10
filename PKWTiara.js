function updateBBTB(){
    const bbtb = prompt('Masukkan BB dan TB yang terbaru: ');
    BBTB.textContent = bbtb;
};
const BBTB = document.querySelector('.dr1');
BBTB.addEventListener('click', updateBBTB);
