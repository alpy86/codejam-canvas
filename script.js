const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 512, 512);

document.querySelector(".img4").addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/BMapps/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json").then(response => response.json()).then(function (arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                ctx.fillStyle = `#${arr[i][j]}`;
                ctx.fillRect(j * 128, i * 128, 128, 128);
            }
        }
    });
});

document.querySelector(".img32").addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/BMapps/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json").then(response => response.json()).then(function (arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                ctx.fillStyle = `rgba(${arr[i][j][0]},${arr[i][j][1]},${arr[i][j][2]},${arr[i][j][3]})`;
                ctx.fillRect(j * 16, i * 16, 16, 16);
            }
        }
    });
});

document.querySelector(".img256").addEventListener("click", function () {
    let img = document.querySelector(".img-rss");
    ctx.drawImage(img, 0, 0, 512, 512);
});


