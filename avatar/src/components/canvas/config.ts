import { fabric } from 'fabric'

export const deleteControl = ()=>{

    const delImgElement = document.createElement('img')
    delImgElement.src = new URL('../icons/delete.png', import.meta.url).href
    const size = 24
    const deleteControlHandel = (eventData:any, transform:any) => {
        const target = transform.target
        const canvas = target.canvas
        canvas.remove(target).renderAll()
    }
    const renderDeleteIcon = (ctx:any, left:any, top:any, styleOverride:any, fabricObject:any)=>{
        ctx.save()
        ctx.translate(left, top)
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle))
        ctx.drawImage(delImgElement, -size / 2, -size / 2, size, size)
        ctx.restore()
    }
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        cornerSize: size,
        offsetY: -30,
        offsetX: 30,
        cursorStyle: 'pointer',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mouseUpHandler: deleteControlHandel,
        render: renderDeleteIcon
    })
}