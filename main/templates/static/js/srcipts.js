let currentMessageIndex = 0;

	function showMessage() {
		const pesan = [
			"klik tombol dibawah untuk membaca pesan 💕",
			"pesan 1",
			"pesan 2",
			"pesan 3",
			"pesan 4",
			"pesan 5",
			"pesan 6",
			"ini adalah pesan terakhir ku untuk mu, maminkan music untukmu🎶"
		];

		// Mengecek apakah indeks saat ini masih dalam jangkauan array 'pesan'
		let messageToShow = pesan[currentMessageIndex];

		// Naikkan indeks untuk pesan berikutnya, dan jika mencapai akhir, reset ke 0
		currentMessageIndex = (currentMessageIndex + 1) % pesan.length;
		// if (currentMessageIndex == pesan.length - 1) {
		// 	document.getElementById(audio-player).play();
		// } else {
		// 	document.getElementById(audio-player).pause();
		// 	document.getElementById(audio-player).currentTime = 0;
		// }
		// // Mengembalikan pesan yang ditampilkan
		return messageToShow;
	}