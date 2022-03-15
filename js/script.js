var testScore = { 
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0,
    avg: 0
};

var i = 1;
// Hiển thị ra bảng điểm sau khi nhập
function score_table() {
    
    document.getElementById("divTable").style.display="block";

    // Lấy dữ liệu sau khi nhập
    testScore.name = document.getElementById("name").value;// gán giá trị tên theo id ở input
    testScore.math = document.getElementById("math").value;// gán giá trị toán theo id ở input
    testScore.physical = document.getElementById("physics").value;// gán giá trị vật lý theo id ở input
    testScore.chemistry = document.getElementById("chemical").value;// gán giá trị hóa học theo id ở input
    testScore.avg = "?";
    // Tính điểm trung bình và gán vào biến đã khai báo ở đầu
    //testScore.avg = ((parseFloat(testScore.math) + parseFloat(testScore.physical) + parseFloat(testScore.chemistry)) / 3).toFixed(2);
    
    document.getElementById("name").value = "";// Xóa trắng các ô input của tên
    document.getElementById("math").value = "";// Xóa trắng các ô input của toán
    document.getElementById("physics").value = "";// Xóa trắng các ô input của vật lý
    document.getElementById("chemical").value = "";// Xóa trắng các ô input của hóa học

    // Thêm dữ liệu vào bảng sau khi nhập thông tin
    var table = document.getElementById("tableScore");
    var row = table.insertRow(i);// Tạo table row theo vị trí
    var number = row.insertCell(0);// Table data ở vị trí đầu tiên
    var name = row.insertCell(1);// Vị trí thứ 2
    var math = row.insertCell(2);// Vị trí thứ 3
    var physics = row.insertCell(3);// Vị trí thứ 4
    var chemistry = row.insertCell(4);// Vị trí thứ 5
    var avg = row.insertCell(5);// Vị trí thứ 6
    
    number.innerHTML  = i;// Trả về nội dung HTML
    name.innerHTML  = testScore.name;// Tên sẽ trả về các giá trị đã được nhập
    math.innerHTML  = testScore.math;// Trả về giá trị HTML của toán
    physics.innerHTML  = testScore.physical;// Trả về giá trị HTML của điểm lý
    chemistry.innerHTML  = testScore.chemistry;// Trả về giá trị HTML của điểm hóa
    avg.innerHTML  = testScore.avg;// Trả về giá trị điểm trung bình
    i++;
}

// 
function showAvg() {
  var table = document.getElementById('tableScore');
  var count = table.rows.length;
  for(var i = 0; i < count; i++) {
  var math =  parseFloat(table.rows[i].cells[2].innerHTML);
  var physics =  parseFloat(table.rows[i].cells[3].innerHTML);
  var chemistry =  parseFloat(table.rows[i].cells[4].innerHTML);
  var avg = ((math + physics + chemistry)/3).toFixed(2);
  if (i > 0) {
    table.rows[i].cells[5].innerHTML = avg;
  }
}
}

// Xác định nếu điểm >= 8 thì bôi đỏ cột và hàng đó
function showBest() {
    var colAvg = document.getElementById("tableScore").querySelectorAll("td:nth-child(6n)");
    var rowAvg = document.getElementById("tableScore").querySelectorAll("tr:nth-child(1n)");
  
    for (var i = 0; i < colAvg.length; i++) {
      var avg = parseFloat(colAvg[i].innerText);
      if (avg >= 8) {
        rowAvg[i + 1].style.color = "red";
      } else {}
    }
  }