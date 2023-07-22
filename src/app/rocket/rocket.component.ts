import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';
// import { CSG } from 'threejs-csg';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene;
  camera;
  capsule;
  stage1;
  booster1;
  // triangle;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6f2da8);

    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);  // Set aspect ratio to 1 for now
    this.camera.position.z = 5;

    var geometry = new THREE.CylinderGeometry(2, 2, 1, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    this.capsule = new THREE.Mesh(geometry, material);
    this.capsule.position.x = 0
    this.capsule.position.y = 0
    this.capsule.position.z = 0
    this.scene.add(this.capsule);

    var geometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    //var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
    var material1 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });
    this.booster1 = new THREE.Mesh(geometry, material1);
    this.booster1.position.x = 0
    this.booster1.position.y = -1.4
    this.booster1.position.z = 0
    this.scene.add(this.booster1);



    // Create a mesh using the geometry and the material
    // let geo = new THREE.ShapeGeometry(new THREE.Shape([new THREE.Vector2(0.5, -0.5), new THREE.Vector2(-0.5, -0.5), new THREE.Vector2(-0.5, 0.5)]));
    // var mat = new THREE.MeshBasicMaterial({
    //   color: 0x00ff00,
    //   wireframe: true
    // });
    // this.triangle = new THREE.Mesh(geo, mat);
    // this.triangle.position.x = 3
    // this.triangle.position.y = 0
    // this.triangle.position.z = 0

    // // Finally, add the triangle to the scene
    // this.scene.add(this.triangle);



    var geometry = new THREE.CylinderGeometry(0, 2, 2, 32);
    //var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
    var material5 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });
    this.stage1 = new THREE.Mesh(geometry, material5);
    this.stage1.position.x = 0
    this.stage1.position.y = 2
    this.stage1.position.z = 0
    this.scene.add(this.stage1);


  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateRendererSize();
    this.animate();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateRendererSize();
  }


  updateRendererSize() {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.capsule.rotation.y += 0.001;
    this.booster1.rotation.y += 0.001;
    this.stage1.rotation.y += 0.001;
    // this.triangle.rotation.y += 0.001;
    this.renderer.render(this.scene, this.camera);
  }
}