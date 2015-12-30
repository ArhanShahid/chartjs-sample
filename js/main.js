$(function(){
    //var monthArray = ['Jan', 'Feb', 'USA', 'Germany', 'France', 'Japan'];
    //var dataSet =  [2500, 1902, 1041, 610, 1245, 952];
    var monthArray = [];
    var dataSet = [];
    $.getJSON("data.json", function(json) {
            var arr= json.data;
            for(var i=0;i<arr.length;i++){
                monthArray.push(arr[i].x);
                dataSet.push(arr[i].y);
            }
            var barData = {
                labels: monthArray,
                datasets: [
                    {
                        label: '2010 customers #',
                        fillColor: '#bad606',
                        data: dataSet
                    }
                ]
            };

            var context = document.getElementById('clients').getContext('2d');
            var clientsChart = new Chart(context).Bar(barData);
        }
    ).fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ', ' + error;
            console.log( "Request Failed: " + err);
        });
});

