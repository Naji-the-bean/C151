AFRAME.registerComponent("car",{
    schema:{model_ref:{type:"string",default:"scene.gltf"}},
    init:function(){
    this.el.setAttribute("gltf-model",this.data.model_ref)
    const position = {x:0,y:50,z:80}
    const rotation = {x:0,y:-100,z:0}  
    this.el.setAttribute("position",position)
    this.el.setAttribute("rotation",rotation)  
    }
})