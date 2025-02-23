"use client";

import React, { useRef, useEffect } from "react";

// OPTION A: import from a CDN
// import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// OPTION B: import from your local libs if you downloaded them
import * as THREE from "three";
import { OrbitControls } from "@/public/libs/threejs/OrbitControls.js";

export default function BrickCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });

    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 3, 6);
    camera.lookAt(0, 0.3, 0);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);
    onResize(); // do an initial sizing

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Create a group for the entire brick so we can rotate it as one
    const blockGroup = new THREE.Group();
    scene.add(blockGroup);

    // Brick base
    const baseGeometry = new THREE.BoxGeometry(2, 0.6, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
    const baseMesh = new THREE.Mesh(baseGeometry, material);
    baseMesh.position.y = 0.3;
    blockGroup.add(baseMesh);

    // Studs
    const studGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.2, 32);
    const studPositions = [
      [-0.5, 0.6 / 2 + 0.1, -0.5],
      [ 0.5, 0.6 / 2 + 0.1, -0.5],
      [-0.5, 0.6 / 2 + 0.1,  0.5],
      [ 0.5, 0.6 / 2 + 0.1,  0.5],
    ];
    studPositions.forEach(([x, y, z]) => {
      const studMesh = new THREE.Mesh(studGeometry, material);
      studMesh.position.set(x, y, z);
      blockGroup.add(studMesh);
    });

    // Track user interactions and auto-rotate logic
    let autoRotateSpeed = 0;
    const maxSpeed = 0.01;   // max rotation speed
    const rampRate = 0.0001; // how fast to ramp up rotation each frame

    // Only reset speed on click, if you wish to let user "pause/slow" the rotation
    function handleUserInteraction() {
      autoRotateSpeed = 0;
    }

    // pointerdown to reset rotation speed
    renderer.domElement.addEventListener("pointerdown", handleUserInteraction);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      // Start ramping up immediately
      autoRotateSpeed += rampRate;
      autoRotateSpeed = Math.min(autoRotateSpeed, maxSpeed);
      blockGroup.rotation.y += autoRotateSpeed;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      // remove only pointerdown listener
      renderer.domElement.removeEventListener("pointerdown", handleUserInteraction);
      // we do not remove pointermove or wheel since we never added them
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '540px',
        position: 'relative'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '150%',
          display: 'block'
        }}
      />
    </div>
  );
} 