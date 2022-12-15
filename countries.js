const audio =new Audio();
audio.src = "audios/minecraft_click.mp3";
$("document").ready(function () {
  $("#btn").on("click", function () {
    $.ajax({
      type: "get",
      url: "country-data.json",
      datatype: "json",
      success: function (country) {
        $.ajax({
          type: "get",
          url: "https://api.exchangerate.host/latest?base=USD",
          datatype: "json",
          success: function (currency) {
            console.log(country);
            var search = document.getElementById("textfield").value;
            for (let i = 0; i < country.length; i++) {
              if (search.toUpperCase() == country[i].name.toUpperCase()) {
                var dollar = country[i].currencies[0].code;
                $("#name").html("Country Name: " + country[i].name);
                $("#code").html("Alpha 3 Code: " + country[i].alpha3Code);
                $("#cName").html(
                  "Currency Name: " + country[i].currencies[0].name
                );
                $("#cCode").html(
                  "Currency Code: " + country[i].currencies[0].code
                );
                $("#cSymbol").html(
                  "Currency Symbol: " + country[i].currencies[0].symbol
                );
                $("#rate").html(
                  "Exchange Rate (USD) " + currency.rates[dollar]
                );
                console.log(currency);

              }
            }
          },
        });
        $.ajax({
          type: "get",
          url: "https://restcountries.com/v3.1/all",
          datatype: "json",
          success: function (restcountries) {
            // console.log("this is it")
            //console.log(restcountries)
            
            var search = document.getElementById("textfield").value;
            for (let y = 0; y < restcountries.length; y++) {
              if (
                search.toUpperCase() ==
                restcountries[y].name.common.toUpperCase()
              ) {
                // console.log(restcountries[y]);
                $("#countryname").html(
                  "Country Name: " + restcountries[y].name.common
                );

                $("#population").html(
                  "Population: " + restcountries[y].population
                );

                $("#flag").attr("src", restcountries[y].flags.png);

                for (let lang in restcountries[y].name.nativeName) {
                  $("#nativename").html(
                    "Native Name: " +
                      restcountries[y].name.nativeName[lang].common
                  );
                  break;
                }

                for (let time in restcountries[y].timezones) {
                  $("#timezone").html(
                    "Timezone: " + restcountries[y].timezones
                  );
                }
              }
            }
          },
        });
      },
    });
  });
});
