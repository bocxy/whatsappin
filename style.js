window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        backgroundColor: "#000000",
        title:{
            text: "Clock Digital Media Comparison Chart",
            fontColor: '#FFFFFF'
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }], 
        axisX: {
            title: "Services",
            labelFontColor: "#FFFFFF"
        },
        axisY: {
            title: "March Month",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true,
        },
        axisY2: {
            title: "April Month",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "C0504E",
            tickColor: "#C0504E",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: '#FFFFFF'
        },
        data: [{
            type: "column",
            name: "March Month",
            showInLegend: true,      
            yValueFormatString: "#,##0.# Booked",
            dataPoints: [
                { label: "Photography",  y: 19034.5 },
                { label: "Videography", y: 20015 },
                { label: "Dj Service", y: 25342 },
                { label: "Decorations",  y: 20088 },
                { label: "Total Services",  y: 28234 }
            ]
        },
        {
            type: "column",
            name: "April Month",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.# Booked",
            dataPoints: [
                { label: "Photography", y: 210.5 },
                { label: "Videography", y: 135 },
                { label: "DJ Service", y: 425 },
                { label: "Decorations", y: 130 },
                { label: "Total Services", y: 528 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }