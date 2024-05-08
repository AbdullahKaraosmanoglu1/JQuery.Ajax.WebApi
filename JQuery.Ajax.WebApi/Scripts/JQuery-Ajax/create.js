// JavaScript source code
/* CreateBookAsync(); EndPoint Request */
$(document).ready(function () {

    // Yeni kitap oluştur butonuna tıklandığında
    $('#createBook').click(function () {
        // Kullanıcıyı create.html sayfasına yönlendir
        window.location.href = 'create.html';
    });

    $('#createBookBtn').click(function () {
        // Kullanıcının girdiği bilgileri al
        var name = $('#bookNameInput').val();
        var author = $('#authorInput').val();
        var language = $('#languageInput').val();
        var publisher = $('#publisherInput').val();
        var imagePath = $('#imagePathInput').val();
        var printingYear = parseInt($('#printingYearInput').val());
        var pageCount = parseInt($('#pageCountInput').val());
        var price = parseFloat($('#priceInput').val());
        var bookCategoryId = parseInt($('#bookCategoryIdInput').val());

        // Yeni kitap nesnesi oluştur
        var newBook = {
            Name: name,
            Author: author,
            Language: language,
            Publisher: publisher,
            ImagePath: imagePath,
            SlugName: name,
            PrintingYear: printingYear,
            PageCount: pageCount,
            Price: price,
            BookCategoryId: bookCategoryId
        };

        // AJAX isteği gönder
        $.ajax({
            url: "https://localhost:7238/api/Book",
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newBook),
            success: function (data) {
                console.log("Yeni kitap oluşturuldu:", data);
                // Başarılı bir şekilde oluşturulan kitabı göstermek için gerekli kodu buraya ekleyin
            },
            error: function (error) {
                console.error("Yeni kitap oluşturulurken bir hata oluştu:", error);
                // Hata durumunda kullanıcıya bir hata mesajı göstermek için gerekli kodu buraya ekleyin
            }
        });
    });
});