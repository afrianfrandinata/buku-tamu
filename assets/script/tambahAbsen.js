const tambahAbsen = document.querySelector(".tambah-absen");
tambahAbsen.addEventListener("click", function () {
  fetch("http://localhost/bukutamuu/api/Keperluan", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  })
    .then((Response) => Response.json())
    .then((Response) => {
      const absen = Response.data;
      let select = "";
      absen.forEach((k) => (select += showKeperluan(k)));
      const containerKeperluan = document.querySelector(".container-keperluan");
      containerKeperluan.innerHTML = select;
    });
});

function showKeperluan(k) {
  return /*html */ `<option selected="selected">${k.kode_keperluan}</option>
                    <option value="1">${k.nama_keperluan}</option>`;
}

// fetch("http://localhost/bukutamuu/api/keperluan", {
//   mode: "no-cors",
//   headers: {
//     "Content-type": "appication/json",
//   },
// }).then((Response) => console.log(Response));
