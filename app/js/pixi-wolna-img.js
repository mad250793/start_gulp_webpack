
// let sizeW = array.offsetWidth;
// let sizeH = array.offsetHeight;

// const app = new PIXI.Application({ sizeW, sizeH, transparent: true });

// app.view.width = sizeW;
// app.view.height = sizeH;

// array.appendChild(app.view);

// const container = new PIXI.Container();
// app.stage.addChild(container);


// const img = PIXI.Sprite.from('img/logo.png');


// img.position.x = 0;
// img.position.y = 0;


// img.width = app.view.width;
// img.height = app.view.height;


// container.addChild(img);


// const displacementSprite = PIXI.Sprite.from('img/displacement.png');
// displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
// const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);


// displacementFilter.scale.set(15000);

// displacementSprite.anchor.set(0.5);

// app.stage.addChild(displacementSprite);

// container.filters = [displacementFilter];



// let tl = gsap.timeline();




// document.body.onclick = () => {
//     tl.to(displacementFilter.scale, 2, { x: 1, y: 1 })
// }
