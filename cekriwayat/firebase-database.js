const recordForm = document.getElementById("recordForm");
recordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Mengambil nilai-nilai dari elemen input
  const noPasien = document.getElementById("noPasien").value;
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const sex = document.getElementById("sex").value;
  const bmi = document.getElementById("bmi").value;
  const heartRate = document.getElementById("heartRate").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const file = document.getElementById("file").value;

  // Buat objek data yang akan dikirim ke Firebase
  const newRecord = {
    noPasien: noPasien,
    nama: nama,
    umur: umur,
    sex: sex,
    bmi: bmi,
    heartRate: heartRate,
    height: height,
    weight: weight,
    file: file
  };

  // Simpan data ke database Firebase
  const recordsRef = firebase.database().ref("records");
  recordsRef.push(newRecord)
    .then(() => {
      alert("Data berhasil disimpan ke Firebase.");
      // Reset form setelah data berhasil disimpan
      recordForm.reset();
    })
    .catch((error) => {
      console.error("Error adding record to Firebase: ", error);
    });
});
