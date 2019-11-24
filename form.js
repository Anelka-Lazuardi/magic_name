let arraySatu = ['A', 'D', 'G', 'J', 'M', 'P', 'S', 'V', 'Y'];
let arrayDua = ['B', 'E', 'H', 'K', 'N', 'Q', 'T', 'W', 'Z'];
let arrayTiga = ['C', 'F', 'I', 'L', 'O', 'R', 'U', 'X', 'SPACE'];


$('#s1').click(function () {
    var cihuy = allnumeric(document.getElementById('satu'));
    if (cihuy == true) {
        let inputSatu = document.getElementById('satu').value
        let angka = parseInt(inputSatu);
        document.getElementById('question').innerHTML = ' ';
        let okey = 1;
        for (let index = 0; index < angka; index++) {
            let input = document.createElement("div");
            input.innerHTML = `  <div class="container-fluid mt-2" >
            <div class="row justify-content-md-center" id="question">
              <di class="col-md-auto">
                <div class="form-inline" >
                  <div class="form-group form-inline mx-sm-3 mb-2">
                    <input
                      type="number"
                      class="form-control"
                      id="answer` + index + `"
                      placeholder="Di Kolom Berapa Huruf Ke ` + okey + ` "
                      requiered
                    />
                  </div>
                </div>
              </div>
            </div>`;
            document.getElementById('wrapper').appendChild(input);
            okey++;
        }
        var btn = document.createElement("div");
        btn.innerHTML = ` <div class="container-fluid mt-2" >
        <div class="row justify-content-md-center" id="question">
          <di class="col-md-auto">
            <div class="form-inline" >
              <button type="submit" class="btn btn-primary mb-2" id="s2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>`;
        document.getElementById('wrapper').appendChild(btn);
        let check = [];
        $('#s2').click(function () {
            for (let index2 = 0; index2 < angka; index2++) {
                let inputs = (document.getElementById('answer' + index2).value);
                // check.push(inputs);
                // if ((!document.getElementById('answer' + index2).value)) {
                //     alert("isi field nomor " +
                //         index2 + " terlebih dahulu sebelum submit");
                //     break;
                // }
                if (inputs == "1") {
                    check.push(arraySatu);
                } else if (inputs == "2") {
                    check.push(arrayDua);
                } else if (inputs == "3") {
                    check.push(arrayTiga);
                }
            }
            document.getElementById('table').innerHTML = `<table class="container text-center">
            <thead>
              <tr>
                <th>
                  <h1 class="text-center">KOLOM 1</h1>
                </th>
                <th>
                  <h1 class="text-center">KOLOM 2</h1>
                </th>
                <th>
                  <h1 class="text-center">KOLOM 3</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 4</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 5</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 6</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 7</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 8</h1>
                </th>
                <th>
                    <h1 class="text-center">KOLOM 9</h1>
                </th>
              </tr>
            </thead>
            <tbody>
            </body>
          </table>`;
            for (let hm = 0; hm < check.length; hm++) {
                $('table tbody').append(
                    ` <tr>
                        <td>` + check[hm][0] + `</td>
                        <td>` + check[hm][1] + `</td>
                        <td>` + check[hm][2] + `</td>
                        <td>` + check[hm][3] + `</td>
                        <td>` + check[hm][4] + `</td>
                        <td>` + check[hm][5] + `</td>
                        <td>` + check[hm][6] + `</td>
                        <td>` + check[hm][7] + `</td>
                        <td>` + check[hm][8] + `</td>
                        </tr>`
                );

            }
            console.log(check);
            document.getElementById('wrapper').innerHTML = ' ';
            let okey = 1;
            for (let index = 0; index < angka; index++) {
                let input = document.createElement("div");
                input.innerHTML = `  <div class="container-fluid mt-2" >
                <div class="row justify-content-md-center" id="question">
                  <di class="col-md-auto">
                    <div class="form-inline" >
                      <div class="form-group form-inline mx-sm-3 mb-2">
                        <input
                          type="number"
                          class="form-control"
                          id="answer2` + index + `"
                          placeholder="Di Kolom Berapa Huruf Ke ` + okey + ` "
                          requiered
                        />
                      </div>
                    </div>
                  </div>
                </div>`;
                document.getElementById('wrapper').appendChild(input);
                okey++;
            }
            var btn = document.createElement("div");
            btn.innerHTML = ` <div class="container-fluid mt-2" >
            <div class="row justify-content-md-center" >
              <di class="col-md-auto">
                <div class="form-inline" >
                  <button type="submit" class="btn btn-dark mb-2" id="s3">
                    Get Name
                  </button>
                </div>
              </div>
            </div>
          </div>`;
            document.getElementById('wrapper').appendChild(btn);

            $('#s3').click(function () {
                var akhir = [];
                for (let index2 = 0; index2 < angka; index2++) {
                    let inputs = (document.getElementById('answer2' + index2).value);
                    akhir.push(inputs);
                }
                console.log(akhir);
                let tes = [];
                for (let hore = 0; hore < akhir.length; hore++) {
                    var uh = parseInt(akhir[hore]);
                    uh -= 1;
                    tes.push(uh);
                }
                var nama = [];
                for (let okey = 0; okey < check.length; okey++) {
                    var hadeh = tes[okey];
                    nama.push(check[okey][hadeh]);

                }

                nama = nama.join('');
                alert("Namanya adalah " + nama);

            });

        });
    }

});

function allnumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers)) {
        return true;
    } else {
        alert('Please input numeric characters only');
        document.getElementById('satu').focus();
        document.getElementById("satu").value = " ";
        return false;
    }
}