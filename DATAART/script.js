let scene = new THREE.Scene() ;

let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1,3000);
camera.position.z = 100;

let rendu = new THREE.WebGLRenderer ();
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor (0x132644);

document.body.appendChild(rendu.domElement);

//  création de la forme 

let forme = new THREE.Group();

let geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);

let materiel = new THREE.MeshNormalMaterial({
    color: 0xff000,
    transparent: true,
    opacity: 1,
    wireframe: true,
    wireframeLineWidth : 5,
    wireframeLinejoin: 'round',
    wireframeLinecap: 'round'
});

forme.add(new THREE.Mesh(geometrie, materiel));

scene.add(forme);

// animation 



// let control = new THREE.OrbitContols(camera, renderer. domElement);
// control.update();




let animer = function(){
    requestAnimationFrame(animer);

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;

    rendu.render(scene, camera);
};

animer();






