const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    order: 'random',
    audio: [
    {
        name: "canon in d",
        artist: 'Brian Crain',
        url: 'http://pd2tflnys.bkt.clouddn.com/Brian%20Crain%20-%20canon%20in%20d.mp3',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
    },    {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'http://pd2tflnys.bkt.clouddn.com/Martin%20Ermen%20-%20Apologize.mp3',
        cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
    },    {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'http://pd2tflnys.bkt.clouddn.com/Yiruma%20-%20River%20Flows%20in%20You.flac',
        cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
    },    {
        name: '惊蛰',
        artist: '音阙诗听/王梓钰',
        url: 'http://www.ytmp3.cn/down/48755.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
    }
    ]
});
