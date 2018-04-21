module.exports = {
    volumeOfRectangularPrism (length, width, height){
        if (typeof length !== "number" || typeof width !== "number" || typeof height !== "number"){
            throw "Unexpect input type!";
        }
        if (length <= 0 || width <= 0 || height <= 0){
            throw "Input out of bounds!";
        }
        return length * width * height;
    },

    surfaceAreaOfRectangularPrism (length, width, height){
        if (typeof length !== "number" || typeof width !== "number" || typeof height !== "number")
            throw "Unexpect input type!";
        if (length <= 0 || width <= 0 || height <= 0)
            throw "Input out of bounds!";
        return 2 * (length * width + length * height + width * height);
    },

    volumeOfSphere(radius){
        if (typeof radius !== "number")
            throw "Unexpect input type!";
        if (radius <= 0)
            throw "Input out of bounds!";
        return 4 / 3 * Math.PI * radius * radius * radius;
    },

    surfaceAreaOfSphere(radius){
        if (typeof radius !== "number")
            throw "Unexpect input type!";
        if (radius <= 0)
            throw "Input out of bounds!";
        return 4 * Math.PI * radius * radius;
    }
};