
export const addOrReplaceLayer = (Canvas:any,layer:any)=>{
    const [index, item] = findCanvasItem(Canvas, layer.name)
    if (index === -1) {
        Canvas.insertAt(layer, index).renderAll()
    } else {
        Canvas.insertAt(layer, index)
        Canvas.remove(item)
        Canvas.renderAll()
    }
}

export const findCanvasItem = (Canvas: any, name: string): Array<number | object> => {
    const index = Canvas.getObjects().findIndex((i: any) => i.name === name)
    return [index, index === -1 ? null : Canvas.item(index)]
}

export const downloadImage = (Canvas:any)=>{
    const dataURL = Canvas.toDataURL({
        width: Canvas.width,
        height: Canvas.height,
        left: 0,
        top: 0,
        format: 'jpg',
      });
      const link = document.createElement('a');
      link.download = 'canvas.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}