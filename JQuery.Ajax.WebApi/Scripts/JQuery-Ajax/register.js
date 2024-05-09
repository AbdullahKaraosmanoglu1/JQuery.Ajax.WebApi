function getRoles() {
    $.ajax({
        url: 'https://localhost:7238/api/Admin/GetAllRoles',
        method: 'GET',
        success: function (data) {
            // Rollerin seçeneklerini açılır menüye ekle
            var roleSelect = $('#roleInput');
            data.data.forEach(function (role) {
                roleSelect.append('<option value="' + role.id + '">' + role.roleName + '</option>');
                console.log("Rol Verileri:", data.data);
            });
        },
        error: function (error) {
            console.error('Roller alınırken bir hata oluştu:', error);
        }
    });
}

// Kullanıcıyı kaydetme fonksiyonu
function registerUser() {
    // Formdaki verileri al
    var firstName = $('#firstNameInput').val();
    var lastName = $('#lastNameInput').val();
    var email = $('#emailInput').val();
    var password = $('#passwordInput').val();
    var roleId = $('#roleInput').val(); // Seçilen rolün ID'sini al

    // Yeni kullanıcı nesnesi oluştur
    var newUser = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        RoleId: roleId // Kullanıcının seçtiği rolün ID'sini ata
    };

    // Web API'ye istek gönder
    $.ajax({
        url: 'https://localhost:7238/api/User',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newUser),
        success: function (data) {
            console.log('Kullanıcı başarıyla kaydedildi:', data);
            // Başka bir sayfaya yönlendirme veya başka bir işlem yapabilirsiniz
        },
        error: function (error) {
            console.error('Kullanıcı kaydedilirken bir hata oluştu:', error);
            // Hata durumunda kullanıcıya bilgi verme veya yeniden deneme gibi işlemler yapılabilir
        }
    });
}


$(document).ready(function () {
    // Rollerin alınması için AJAX isteği
    getRoles();

    // Kayıt ol düğmesine tıklanınca
    $('#registerBtn').click(function (event) {
        event.preventDefault(); // Formun varsayılan davranışını engelle

        // Kullanıcıyı kaydet fonksiyonunu çağır
        registerUser();
    });
});

// Rollerin alınması için AJAX isteğini içeren fonksiyon
