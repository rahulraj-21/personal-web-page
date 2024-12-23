$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Validate required fields
        let isValid = true;
        $("#registrationForm input, #registrationForm textarea, #registrationForm select").each(function () {
            if ($(this).val().trim() === "") {
                isValid = false;
                $(this).css("border", "1px solid red");
            } else {
                $(this).css("border", "1px solid #ddd");
            }
        });

        if (isValid) {
            this.submit(); // Submit form if validation passes
        } else {
            alert("Please fill in all required fields.");
        }
    });
});
