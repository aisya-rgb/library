document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Ambil elemen input
    const transactionId = document.getElementById('transaction-id');
    const memberName = document.getElementById('member-name');
    const bookTitle = document.getElementById('book-title');
    const borrowDate = document.getElementById('borrow-date');
    const returnDate = document.getElementById('return-date');

    // Ambil elemen error
    const transactionIdError = document.getElementById('transaction-id-error');
    const memberNameError = document.getElementById('member-name-error');
    const bookTitleError = document.getElementById('book-title-error');
    const borrowDateError = document.getElementById('borrow-date-error');
    const returnDateError = document.getElementById('return-date-error');

    // Reset pesan kesalahan
    const errorElements = [transactionIdError, memberNameError, bookTitleError, borrowDateError, returnDateError];
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });

    let isValid = true;

    // Validasi setiap input
    if (transactionId.value.trim() === '') {
        transactionIdError.textContent = 'ID Transaksi harus diisi.';
        transactionIdError.style.display = 'block';
        isValid = false;
    }
    if (memberName.value.trim() === '') {
        memberNameError.textContent = 'Nama Anggota harus diisi.';
        memberNameError.style.display = 'block';
        isValid = false;
    }
    if (bookTitle.value.trim() === '') {
        bookTitleError.textContent = 'Judul Buku harus diisi.';
        bookTitleError.style.display = 'block';
        isValid = false;
    }
    if (borrowDate.value.trim() === '') {
        borrowDateError.textContent = 'Tanggal Peminjaman harus diisi.';
        borrowDateError.style.display = 'block';
        isValid = false;
    }
    if (returnDate.value.trim() === '') {
        returnDateError.textContent = 'Tanggal Pengembalian harus diisi.';
        returnDateError.style.display = 'block';
        isValid = false;
    }

    // Jika semua valid, kirim formulir
    if (isValid) {
        alert('Formulir berhasil dikirim!');
        this.submit();
    }
});
