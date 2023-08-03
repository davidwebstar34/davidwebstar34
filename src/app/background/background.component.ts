import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, NgModule, Input } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  @Input() text: string;


  renderer = new THREE.WebGLRenderer();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  planeMesh: any;
  frame = 0;
  // randomValues: Float32Array;

  constructor() {
    this.text = ""

    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });

    const planeGeometry = new THREE.PlaneGeometry(24, 24, 25, 25)
    const planeMaterial = new THREE.MeshBasicMaterial({
      // color: 0x00ff00,
      side: THREE.DoubleSide,
      // flatShading: true,
      vertexColors: true,
      wireframe: true

    })

    this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
    this.scene.add(this.planeMesh)

    const positionAttribute = this.planeMesh.geometry.getAttribute('position') as THREE.BufferAttribute;
    const positionArray = new Float32Array(positionAttribute.array);

    console.log(this.planeMesh.geometry)

    for (let i = 0; i < positionArray.length; i += 3) {
      if (i % 3 == 0) {
        const x = positionArray[i];
        const y = positionArray[i + 1];
        const z = positionArray[i + 2];

        positionArray[i] = x + (Math.random() - 0.5);
        positionArray[i + 1] = y + (Math.random() - 0.5)
        positionArray[i + 2] = z + Math.random();
      }
    }

    positionAttribute.array = positionArray;
    positionAttribute.needsUpdate = true;

    const colors = []
    for (let i = 0; i < positionArray.length; i++) {
      colors.push(0, 1, 0.19)
    }

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 0, 1)
    this.scene.add(light)

    const backlight = new THREE.DirectionalLight(0xffffff, 1)
    backlight.position.set(0, 0, -1)
    this.scene.add(backlight)

    this.planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);

    this.frame += 0.01

    const positionAttribute = this.planeMesh.geometry.getAttribute('position') as THREE.BufferAttribute;
    const positionArray = new Float32Array(positionAttribute.array);
    const originalArray = new Float32Array(positionAttribute.array);
    const randomValues = new Float32Array(positionAttribute.array);

    for (let i = 0; i < positionArray.length; i += 3) {
      positionArray[i] = originalArray[i] + Math.cos(this.frame + (randomValues[i] - 0.5)) * 0.003
      positionArray[i + 1] = originalArray[i + 1] + Math.sin(this.frame + (randomValues[i + 1] - 0.5)) * 0.003
    }

    positionAttribute.array = positionArray;
    positionAttribute.needsUpdate = true;
  }

  ngOnDestroy() {
    this.renderer.dispose();
  }

}
