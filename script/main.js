const API_URL = "https://script.google.com/macros/s/AKfycbzvL68R4SSqcTZRPYJ4WaP3_kF5spBZ_oYPlMP__YsrlW5S4age6zq4318zFioX88AU/exec";

async function addData() {
  const text = document.getElementById("input").value;
  if (!text) return;

  await fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ action: "add", text })
  });

  document.getElementById("msg").innerText = "Berhasil Di Kirim ✔";
  document.getElementById("input").value = "";

  setTimeout(() => {
    document.getElementById("msg").innerText = "";
  }, 2000);
}