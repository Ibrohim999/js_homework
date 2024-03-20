let num = +prompt('son kiriting')
while (isNaN(num) || num == 0) {
    num = +prompt('sondan boshqa narsa kiritdingiz')
}

let cube = ""

for (let i = 0; i < num; i++) {
    for (let w = 0; w < num; w++) {
        if (w == i || i == 0 || w == 0 || w == num - 1 || i == num - 1) {
            cube += '🟥'
        }
        else {
            cube += '🟩'
        }
    }
    console.log(cube);
    cube = ""

}
