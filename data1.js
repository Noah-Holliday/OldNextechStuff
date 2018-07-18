// follow the instructions for tabltop.js to get this url to your spreadsheet of data
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1OhDcsrGFile5JsMeQAZ7WogUwSZAJY5qCIRd7xBHhYg/pubhtml">https://docs.google.com/spreadsheets/d/1OhDcsrGFile5JsMeQAZ7WogUwSZAJY5qCIRd7xBHhYg/pubhtml';

// create varibles that will hold columns of your data (change as needed)
var dataIn;

// the tabletop libray grabs our spreadsheet data and returns an array of objects then runs processData() so that we can set our variables as arrays of each column

function init() {
    Tabletop.init({
            key: publicSpreadsheetUrl,
            callback: processData,
            simpleSheet: false
        })
    $('#year').change(drawPieChart);
    $('#wrapper').css('visibility', 'hidden');
}

function processData(data, tabletop) {
    //Change 'For Responses 2' to the sheet name you want to use
    //from the spreadsheet file. 
    //This supports using multiple sheets for the different 
    //sources of data you may use.
    dataIn = data['Sheet1'].elements;

    //we can test to see if a column loaded correctly
    //$('body').append(JSON.stringify(dataIn.filterBy("Year", "1957")[0].values()));

    drawPieChart();
    // Stacked bar chart
    var year = dataIn.map(function(a) {
        return "*" + (a['Year']);
    });
    var education = dataIn.map(function(a) {
        return Number(a['Education']);
    });
    var transportation = dataIn.map(function(a) {
        return Number(a['Transportation']);
    });
    var health = dataIn.map(function(a) {
        return Number(a['Health Care']);
    });
    var welfare = dataIn.map(function(a) {
        return Number(a['Welfare']);
    });
    var other = dataIn.map(function(a) {
        return Number(a['Other Spending']);
    });
    var protection = dataIn.map(function(a) {
        return Number(a['Protection']);
    });
    var pensions = dataIn.map(function(a) {
        return Number(a['Pensions']);
    });
    var general = dataIn.map(function(a) {
        return Number(a['General Government']);
    });
    var interest = dataIn.map(function(a) {
        return Number(a['Interest']);
    });
    var defense = dataIn.map(function(a) {
        return Number(a['Defense']);
    });
    var trace1 = {
        y: year,
        x: education,
        name: 'Education',
        type: 'bar',
        orientation: 'h'
    };

    var trace2 = {
        y: year,
        x: transportation,
        name: 'Transportation',
        type: 'bar',
        orientation: 'h'
    };

    var trace3 = {
        y: year,
        x: health,
        name: 'Health',
        type: 'bar',
        orientation: 'h'
    };

    var trace4 = {
        y: year,
        x: welfare,
        name: 'Welfare',
        type: 'bar',
        orientation: 'h'
    };

    var trace5 = {
        y: year,
        x: other,
        name: 'Other',
        type: 'bar',
        orientation: 'h'
    };
    var trace6 = {
        y: year,
        x: pensions,
        name: 'Pensions',
        type: 'bar',
        orientation: 'h'
    };
    var trace7 = {
        y: year,
        x: defense,
        name: 'Defense',
        type: 'bar',
        orientation: 'h'
    };
    var trace8 = {
        y: year,
        x: protection,
        name: 'Protection',
        type: 'bar',
        orientation: 'h'
    };
    var trace9 = {
        y: year,
        x: general,
        name: 'General Government',
        type: 'bar',
        orientation: 'h'
    };
    var trace10 = {
        y: year,
        x: interest,
        name: 'Interest',
        type: 'bar',
        orientation: 'h'
    };



    data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

    layout = {
        barmode: 'stack',
        legend: {
            orientation: "h",
            traceorder: "normal"
        }

    };

    Plotly.newPlot('panel2', data, layout);

    var layout2 = {
        height: 500,
    }

    var trace11 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [3, 4, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 9, 9, 10],
        type: 'lines',
        name: 'Pensions'
    };
    var trace12 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [20, 10, 9, 10, 12, 16, 16, 21, 31, 26, 29, 28, 29, 35, 35, 34],
        type: 'lines',
        name: 'Health Care'
    };
    var trace13 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [24, 28, 38, 46, 36, 34, 32, 31, 28, 30, 27, 25, 27, 26, 25, 25],
        type: 'lines',
        name: 'Education'
    };
    var trace14 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        type: 'lines',
        name: 'Defense'
    };
    var trace15 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [12, 10, 5, 6, 18, 17, 16, 23, 10, 10, 11, 20, 11, 10, 10, 10],
        type: 'lines',
        name: 'Welfare'
    };
    var trace16 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [3, 1, 1, 2, 1, 4, 4, 5, 5, 6, 5, 4, 5, 4, 4, 4],
        type: 'lines',
        name: 'Protection'
    };
    var trace17 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [24, 30, 27, 20, 15, 14, 13, 11, 9, 9, 9, 7, 9, 6, 6, 6],
        type: 'lines',
        name: 'Transportation'
    };
    var trace18 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [3, 2, 3, 2, 3, 3, 3, 4, 3, 4, 3, 2, 3, 2, 3, 3],
        type: 'lines',
        name: 'General Government'
    };
    var trace19 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [8, 12, 10, 8, 9, 6, 8, 6, 5, 5, 5, 3, 5, 4, 4, 4],
        type: 'lines',
        name: 'Other Spending'
    };
    var trace20 = {
        x: [1957, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018],
        y: [3, 3, 3, 2, 1, 1, 3, 4, 3, 3, 4, 4, 4, 4, 4, 4],
        type: 'lines',
        name: 'Interest'
    };
    data = [trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20];

    Plotly.newPlot('panel3', data);
    $('#wrapper').css('visibility', 'hidden');

}

function drawPieChart() {
    /////////////////////////Pie Chart//////////
    var yearIndex = Number($('#year').val()); //0 is 1957, 1 is 1960, 2 is 1965 ....
    var pieData = dataIn[yearIndex];
    var pieTitle = pieData.Year;
    delete pieData.Year;
    var data = [{
            values: Object.values(pieData),
            labels: Object.keys(pieData),
            type: 'pie'
        }
    ];

    var layout = {
        height: 400,
        width: 500,
        title: pieTitle
    };
    Plotly.newPlot('panel1', data, layout);
}