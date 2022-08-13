(function() {
    var canvas, ctx;
    var points = [];
    var maxDist = 10;

    function init() {
        //Add on load scripts
        canvas = document.getElementById("snow");
        ctx = canvas.getContext("2d");
        resizeCanvas();
        pointFun();
        setInterval(pointFun, 20);
        document.querySelector('#snowbox').addEventListener('resize', resizeCanvas, false);

        // window.onscroll = function() {
        //     let snow_height = document.querySelector('#snowbox').offsetHeight;
        //     var t = document.documentElement.scrollTop || document.body.scrollTop;
        //     var top_div = document.querySelector("#snowbox");
        //     console.log(t)
        //     if (t >= snow_height) {
        //         return;
        //     }
        // }
    }
    //Particle constructor
    function point() {
        this.x = Math.random() * (canvas.width + maxDist) - (maxDist / 2);
        this.y = Math.random() * (canvas.height + maxDist) - (maxDist / 2);
        this.z = (Math.random() * 0.5) + 0.5;
        this.vx = ((Math.random() * 2) - 0.5) * this.z;
        this.vy = ((Math.random() * 1.5) + 1.5) * this.z;
        this.fill = "rgba(255,255,255," + ((0.4 * Math.random()) + 0.5) + ")";
        this.dia = ((Math.random() * 5) + 1.5) * this.z;
        points.push(this);
    }
    //Point generator
    function generatePoints(amount) {
        var temp;
        for (var i = 0; i < amount; i++) {
            temp = new point();
        };
        // console.log(points);
    }
    //Point drawer
    function draw(obj) {
        ctx.beginPath();
        ctx.strokeStyle = "transparent";
        ctx.fillStyle = obj.fill;
        ctx.arc(obj.x, obj.y, obj.dia, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    //Updates point position values
    function update(obj) {
        obj.x += obj.vx;
        obj.y += obj.vy;
        if (obj.x > canvas.width + (maxDist / 2)) {
            obj.x = -(maxDist / 2);
        } else if (obj.xpos < -(maxDist / 2)) {
            obj.x = canvas.width + (maxDist / 2);
        }
        if (obj.y > canvas.height + (maxDist / 2)) {
            obj.y = -(maxDist / 2);
        } else if (obj.y < -(maxDist / 2)) {
            obj.y = canvas.height + (maxDist / 2);
        }
    }
    //
    function pointFun() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < points.length; i++) {
            draw(points[i]);
            update(points[i]);
        };
    }

    function resizeCanvas() {
        let snow_width = document.querySelector('div#snowbox').offsetWidth;
        let snow_height = document.querySelector('div#snowbox').offsetHeight;
        // let snow_height = document.querySelector('.PD').offsetHeight;
        // let snow_height2 = document.documentElement.scrollTop;

        canvas.width = snow_width;
        canvas.height = snow_height;
        points = [];
        generatePoints(snow_width / 25);
        pointFun();
        console.log('元素高度:', snow_height)
    }
    //Execute when DOM has loaded
    document.addEventListener('DOMContentLoaded', init, false);
})();