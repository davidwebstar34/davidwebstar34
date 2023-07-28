import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene;
  camera;
  width = window.innerWidth;
  height = window.innerHeight;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6f2da8);

    this.camera = new THREE.PerspectiveCamera(80, this.width/this.height, 1, 4000);
    this.camera.position.z = 3000;

    this.makeParticles();

  }

  makeParticles = () => {
    var particleCount = 5000;
  
    // define what the particles look like
    var material = new THREE.PointsMaterial({
        color: 0x00ff00,
        size: 20
    });
  
    // x y z coordinates
    var pX, pY, pZ;
  
    // Array for storing vertices
    var vertices = [];
  
    // define each particle's position and add it to the system
    for (var i = 0; i < particleCount; i++) {
        pX = Math.random() * 3000 - 1500;
        pY = Math.random() * 3000 - 1500;
        pZ = Math.random() * 3000 - 1500;
        vertices.push(pX, pY, pZ);
    }
  
    // our individual particles
    var particles = new THREE.BufferGeometry();
    particles.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  
    // big bang: create the space, pass it the particles and what the particles look like
    // our system of particles
    var particleSystem = new THREE.Points(particles, material);
  
    // add it to the scene
    this.scene.add(particleSystem);
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

    var object = this.scene.children[0];
	
	//set rotation
	object.rotation.x -= Math.random()*0.001-0.005;
	object.rotation.y -= Math.random()*0.001-0.005;
	object.rotation.z -= Math.random()*0.001-0.005;

    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy() {
    this.renderer.dispose();
  }
}