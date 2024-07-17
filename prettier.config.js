/** @type {import("prettier").Config} */
const prettierConfig = {
    trailingComma: "all",
    overrides: [
        {
            files: ["*.json"],
            options: {
                // Prevent consolidating multiple values on one line
                printWidth: 1,
            },
        },
    ],
};
<input type="password" id="password">
<button class="decrypt">Decrypt</button>
<script>
    var myEncryptedPage = '<html-string-pre-encrypted-with-your-password>';
    $('.decrypt').click(function(){
        var password = $('#password').val();
        // 'decrypt' tries to decrypt your string with the user provided password
        document.write(decrypt(myEncryptedPage, password));
    });
</script>
module.exports = prettierConfig;
