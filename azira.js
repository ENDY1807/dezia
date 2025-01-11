document.getElementById('open-gift-btn').addEventListener('click', function () {
    // Ganti 'halaman2.html' dengan nama file halaman berikutnya
    window.location.href = 'hadiah.html';
  });

document.getElementById('open-gift-btn').addEventListener('click', function () {
    const gift = document.getElementById('gift');
    const button = document.getElementById('open-gift-btn');
  
    // Sembunyikan tombol dan tampilkan hadiah
    button.style.display = 'none';
    gift.classList.remove('hidden');
  
    // Tambahkan animasi atau efek lainnya
    gift.style.animation = 'fadeIn 1s ease-in-out';
  });
  
  // Tambahkan animasi CSS untuk efek fadeIn
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);