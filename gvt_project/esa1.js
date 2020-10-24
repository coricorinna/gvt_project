window.onload = () => {
    window.onkeydown = (event => {
        if (event.key === 'r') {
            clearContinuousRotation();
            rotateImage(false);
            return;
        }

        if(event.key === 'l') {
            clearContinuousRotation();
            rotateImage(true);
            return;
        }

        if(event.key === 'a') {
            if(!rotatingInterval) {
                rotateContinuously();
                return;
            }

            clearContinuousRotation();
        }

    })


    const pizza = document.getElementById('pizza');
    let pizzaDegree = 0;
    let rotatingInterval = undefined;

    const rotateImage = (inReverse) => {
        const turnAmount = inReverse ? -36 : 36 ;
        const degree = pizzaDegree || 360;
        pizzaDegree = (degree + turnAmount) % 360;
        pizza.src = getPizzaPath(pizzaDegree);
    };

    const clearContinuousRotation = () => {
        clearInterval(rotatingInterval);
        rotatingInterval = undefined;
        pizza.src = getPizzaPath(pizzaDegree);
    };

    const getPizzaPath = (id) => {
        return id || id === 0 ? `images/pizza-start${id}.png` : 'images/pizza-start.png';
    };

    const rotateContinuously = () => {
        rotatingInterval = setInterval(() => {
            rotateImage();
        }, 100)
    };
};

