$(document).ready(function () {
    let autocompleteEntries = [];
    let cities = [];

    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'https://mocki.io/v1/0b4da118-49d2-4862-99d0-31a01630e92b',
        success: function (data) {
            let max = -Infinity;
            let min = Infinity;
            let filters = [];
            $('body > #ajaxError').hide();

            // apo to url pou einai enas pinakas pername kafwta ta entries se enan pinaka
            const entries = data[1].entries;
            // dinoume sintetagmenes sto mapModal sto source attribute
            // $('$mapModal iframe').attr('src', entries[0].mapurl);

            // $('#$ > button').click(function () {
            //     $('#mapModal').modal('show');
            // })


            entries.forEach(function (entry) {
                if (!autocompleteEntries.includes(entry.city)) {
                    autocompleteEntries.push(entry.city);
                    cities.push(entry.city);
                }
                if (!autocompleteEntries.includes(entry.hotelName)) {
                    autocompleteEntries.push(entry.hotelName);

                }
                if (entry.price > max) {
                    max = entry.price;

                }
                if (entry.price < min) {
                    min = entry.price;

                }
                // Dhmiourgw ena pinaka filters kai ton gemizw me ola ta pithana filtra 
                // wste na ta emfanizw sto ui
                const entryFilters = entry.filters;
                let filterString = "";
                entryFilters.forEach(function (filter) {
                    if (!filters.includes(filter.name)) {
                        filters.push(filter.name);
                    }
                    filterString = filterString + filter.name + '.';

                })
                //
                const outerDiv = $(document.createElement('div'));
                const imgDiv = $(document.createElement('div'));
                $(imgDiv).addClass('imgDiv');
                const img = $(document.createElement('img'));
                $(img).attr('src',entry.thumbnail);
                $(imgDiv).append(img);
                $(outerDiv).append(imgDiv);

                const hotelDetailsDiv = $(document.createElement('div'));
                $(hotelDetailsDiv).addClass('hotelDetails');

                const filtersSpan = $(document.createElement('span'));
                $(filtersSpan).addClass('filters');
                $(filtersSpan).text(filtersString);
                $(filtersSpan).hide();                
                $(hotelDetailsDiv).append(filtersSpan);

                const h4 = $(document.createElement('h4'));
                $(h4).addClass('hotelName');
                $(h4).text(entry.hotelName);
                $(hotelDetailsDiv).append(h4);

                const stars = $(document.createElement('p'));
                $(stars).addClass('stars');
                $(stars).attr('rating', entry.rating);
                for (let i = 0; i<entry.rating; i++){
                    $(stars).append('<span class="icon-ic star">' +
                                        '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="12" height="12" viewBox="0 0 12 12">' +
                                            '<path class="svg-color--primary" fill="#F6AB3F" d="M11.988 5.21c-.052-.275-.27-.488-.545-.534l-3.604-.6L6.63.455C6.542.184 6.287 0 6 0s-.542.184-.632.456L4.16 4.076l-3.603.6c-.275.046-.493.26-.545.533-.052.273.072.55.312.695L3.2 7.63l-1.165 3.493c-.093.28.01.59.25.758.115.08.25.12.382.12.148 0 .295-.05.416-.146L6 9.52l2.917 2.333c.12.098.27.147.416.147.133 0 .267-.04.38-.12.244-.17.346-.478.252-.758L8.8 7.63l2.876-1.725c.24-.144.364-.422.312-.696z"></path>' +
                                        '</svg>' +
                                    '</span>');
                }
                $(stars).append('<span class="hotelSpan">Hotel</span>');
                $(hotelDetailsDiv).append(stars);
                
                const hotelLocation = $(document.createElement('p'));
                $(hotelLocation).addClass('hotelLocation');
                $(hotelLocation).text(entry.city);
                $(hotelDetailsDiv).append(hotelLocation);
                
                const ratings = $(document.createElement('p'));
                $(ratings).addClass('ratings');
                const ratingNum = $(document.createElement('span'));
                $(ratingNum).text(entry.ratings.no == (entry.ratings.no + '.0') ? (entry.ratings.no + '.0') : entry.ratings.no);
                //to be seen
                $(ratings).append(ratingNum);
                const ratingText = $(document.createElement('span'));
                $(ratingText).text(entry.ratings.text);
                $(ratings).append(ratingText);
                $(hotelDetailsDiv).append(ratings);
                $(outerDiv).append(hotelDetailsDiv);
                const viewDealDiv = $(document.createElement('div'));
                $(viewDealDiv).addClass('viewDealDiv');
                const dealDiv = $(document.createElement('div'));
                const span1 = $(document.createElement('span'));
                $(span1).text('Hotel Website');
                $(dealDiv).append(span1);
                const span2 = $(document.createElement('span'));
                $(span2).addClass('price');
                $(span2).text('$' + entry.price);
                $(dealDiv).append(span2);
                $(dealDiv).append('<span><span>1 night for</span> $' + entry.price + '</span>')
                $(viewDealDiv).append(dealDiv);
                $(viewDealDiv).append('<button class="btn">' +
                                        '<span>View Deal</span>' +
                                            '<span class="icon-ic btn__ic btn__ic--deal-arrow icon-center icon-rtl">' +
                                                '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24">' +
                                                    '<path fill="none" stroke="#37454D" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M9.5 7l5 5M9.5 17l5-5" class="svg-color--primary"></path>' +
                                                '</svg>' +
                                            '</span>' +
                                        '</button>');
                $(outerDiv).append(viewDealDiv);
                $(outerDiv).hide();
                $('#resultsList').append(outerDiv);
            })
            filters.sort();
            filters.forEach(function(filter) {
                const option = $(document.createElement('option'));
                $(option).attr('value',filter);
                $(option).text(filter);
                $('#sortby > select ').append(option);
            })
            cities.sort();
            cities.forEach(function(city) {
                const option = $(document.createElement('option'));
                $(option).attr('value',city);
                $(option).text(city);
                $('#hotelLocationDiv > select ').append(option);
            })
            $("#priceRange").attr('min',min);
            $("#priceRange").attr('max',max);


        },
        error: function () {
            // pigaine sto body kai pare to paidi pou einai #ajaxerror kai apo kei to paidi  p kai kane to text kati
            $('body > #ajaxError > p').text("Something went wrong. try again");
            $('body > #ajaxError').show();

            $('body > #ajaxSuccess').hide();
        }
    })

});