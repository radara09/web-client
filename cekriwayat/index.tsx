import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Komponen CekRiwayat untuk halaman Cek Riwayat
const CekRiwayat: React.FC = () => {
  const [riwayat, setRiwayat] = useState<string[]>([]);

  useEffect(() => {
    // Mengambil riwayat dari backend atau sumber data lainnya
    // Misalnya, lakukan permintaan HTTP menggunakan Fetch atau Axios
    // Setelah data diterima, perbarui state riwayat menggunakan setRiwayat
    const fetchRiwayat = async () => {
      try {
        const response = await fetch('URL_API_RIWAYAT');
        const data = await response.json();
        setRiwayat(data);
      } catch (error) {
        console.error('Gagal mengambil riwayat:', error);
      }
    };

    fetchRiwayat();
  }, []);

  return (
    <div>
      <h1>Cek Riwayat</h1>
      {riwayat.length > 0 ? (
        <ul>
          {riwayat.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada riwayat yang tersedia.</p>
      )}
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default CekRiwayat;
