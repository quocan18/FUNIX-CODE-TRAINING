var testScore = { 
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0,
    avg: 0
};

var i = 1;

$(function() {
    $('#show_table').click(function() {
        $('#divTable').css("display","block");
        var name = $("#name").val();
        var math = $("#math").val();
        var physics = $("#physics").val();
        var chemical = $("#chemical").val();
        $('#divTable').css("display","block");
        
        $("#name").val("");
        $("#math").val("");
        $("#physics").val("");
        $("#chemical").val("");

        var html = "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + name + "</td>";
        html += "<td>" + math + "</td>";
        html += "<td>" + physics + "</td>";
        html += "<td>" + chemical + "</td>";
        html +=  "<td>?</td>";

        
        $('#divTable table').append(html);
        i++;
    });

    // Tính điểm trung bình và thay thế "?"
    $('#showAvg').click(function(){
        $("#tableScore tr").each(function() {
            var math = parseFloat($(this).find("td:eq(2)").text());
            var physics= parseFloat($(this).find("td:eq(3)").text());
            var chemistry= parseFloat($(this).find("td:eq(4)").text());
            var avg = ((math + physics + chemistry)/3).toFixed(1);
            $(this).find("td:eq(5)").text(avg);
        });
    });

    // Hightlight các điểm trung bình >= 8
    $('#showBest').click(function(){
        $('#tableScore tr').each(function(){
            if ($(this).find('td:eq(5)').text() >= 8) {
                $(this).addClass('highlight');
            }
        })
    });
});