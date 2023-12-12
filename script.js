const canvas = document.getElementById('backgroundCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function drawBackground() {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, <link>"orange"</link>);
            gradient.addColorStop(1, <link>"red"</link>);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);}

            function updateBackground() {
                drawBackground();
                requestAnimationFrame(updateBackground);
            }