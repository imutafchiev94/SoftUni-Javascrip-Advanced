function rectangle(width, height, color) {
    color = color.slice(0, 1).toUpperCase() + color.slice(1);
    let obj = {
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea() {
           return this.width * this.height;
        }
    }
    
    return obj
}