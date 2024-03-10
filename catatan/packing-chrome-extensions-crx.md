```
chrome.exe --pack-extension=C:\myext --pack-extension-key=C:\myext.pem
```


Berikut ini adalah langkah-langkah untuk membuat file kunci privat yang dilindungi kata sandi dan file kunci privat tanpa kata sandi menggunakan OpenSSL:

1. **Generate Private Key dengan Kata Sandi:**
   Untuk membuat file kunci privat yang dilindungi kata sandi, Anda dapat menggunakan perintah berikut:

   ```bash
   openssl genrsa -des3 -out private-key.pem 2048
   ```

   Setelah mengetikkan perintah ini, OpenSSL akan meminta Anda untuk memasukkan kata sandi baru untuk kunci privat yang akan dibuat. Kemudian, OpenSSL akan membuat kunci privat dengan panjang 2048 bit dan melindunginya dengan kata sandi yang telah Anda tentukan.

2. **Generate Private Key tanpa Kata Sandi:**
   Jika Anda ingin membuat file kunci privat tanpa kata sandi, Anda bisa menggunakan perintah ini:

   ```bash
   openssl genrsa -out private-key.pem 2048
   ```

   Dengan perintah ini, OpenSSL akan membuat kunci privat tanpa kata sandi yang terkait dengannya. Ini akan memungkinkan Anda untuk menggunakan kunci privat tersebut tanpa harus memasukkan kata sandi setiap kali Anda menggunakannya.

Setelah Anda menjalankan perintah yang sesuai, Anda akan memiliki file `private-key.pem` yang berisi kunci privat yang dibuat sesuai dengan opsi yang Anda pilih. Pastikan untuk menyimpan file ini dengan aman, terutama jika Anda menggunakan kunci privat tanpa kata sandi, karena orang lain dapat menggunakannya tanpa otorisasi.
