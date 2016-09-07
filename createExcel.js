$(function() {
    $.excel = function(domId, setting) {
        var options = $.extend({
            startCols: 26,
            startRows: 10,
            colHeaders: [],
            data: [],
            ifEdit: false
        }, setting);

        function init() {
            var temp = "<div id='myExcel'>";
            temp += "<div class='excelBox'>";
            temp += "<table>";
            temp += "<thead>";
            temp += "<tr>";
            temp += "<th class='leftRow'>";
            temp += "</th>";
            if (options.colHeaders.length > 0) {
                for (var i = 0; i < options.colHeaders.length; i++) {
                    temp += "<th>";
                    temp += "<span>";
                    if (options.colHeaders[i]) {
                        temp += options.colHeaders[i];
                    }
                    temp += "</span>";
                    temp += "</th>";
                }
            } else {
                for (var j = 0; j < options.startCols; j++) {
                    temp += "<th>";
                    temp += "<span>";
                    var x = Math.floor(j / 26);
                    var y = j % 26;
                    if (x > 0) {
                        temp += String.fromCharCode(x + 64);
                    }
                    temp += String.fromCharCode(y + 65);
                    temp += "</span>";
                    temp += "</th>";
                }
            }
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            for (var m = 0; m < options.startRows; m++) {
                if (options.data[m] === undefined) {
                    options.data[m] = [];
                }
                temp += "<tr>";
                temp += "<td class='leftRow'>";
                temp += "<span>";
                temp += m;
                temp += "</span>";
                temp += "</td>";
                for (var n = 0; n < options.startCols; n++) {
                    if (options.data[m][n] === undefined || options.data[m][n] === null) {
                        options.data[m][n] = '';
                    }
                    temp += "<td>";
                    temp += "<span>";
                    if (options.ifEdit) {
                        temp += "<input type='text' class='option-input option-" + m + "-" + n + "' data-m='" + m + "' data-n='" + n + "' value='" + options.data[m][n] + "' readonly>";
                    } else {
                        temp += "<input type='text' class='option-input option-" + m + "-" + n + "' data-m='" + m + "' data-n='" + n + "' value='" + options.data[m][n] + "'>";
                    }
                    temp += "</span>";
                    temp += "</td>";
                }
                temp += "</tr>";
            }
            temp += "</tbody>";
            temp += "</table>";
            temp += "</div>";
            temp += "</div>";
            $("#" + domId).html(temp);
        }

        function getData() {
            $(".option-input").each(function(o) {
                var m = $(".option-input").eq(o).attr("data-m"),
                    n = $(".option-input").eq(o).attr("data-n");
                options.data[m][n] = $(".option-" + m + "-" + n).val()
            });
            return options.data;
        }

        return {
            'init': init,
            'getData': getData
        };
    };
});