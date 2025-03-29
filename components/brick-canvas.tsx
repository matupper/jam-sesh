"use client";

import React, { useRef, useEffect, useState } from "react";

// OPTION B: import from your local libs if you downloaded them
import * as THREE from "three";
import { OrbitControls } from "@/public/libs/threejs/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function BrickCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(500); // Default height

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
    camera.position.set(0, 3, 8.4);
    camera.lookAt(0, 0.3, 0);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    let brickModel: THREE.Object3D | null = null;

    const loader = new GLTFLoader();
    loader.load("/libs/threejs/2x2_brick.glb", (gltf) => {
      brickModel = gltf.scene;
      brickModel.scale.set(5.6, 5.6, 5.6);
      scene.add(gltf.scene);
    });

    // Calculate available height based on viewport and container position
    function calculateAvailableHeight() {
      if (!containerRef.current) return 500;
      
      const viewportHeight = window.innerHeight;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const footerHeight = 200; // Increased from 80 to account for the full footer including "Follow us" section
      
      // Calculate height that fits within viewport without causing scroll
      const availableHeight = viewportHeight - containerTop - footerHeight - 20; // Added 20px buffer
      
      // Ensure minimum height
      return Math.max(availableHeight, 300);
    }

    function onResize() {
      // Update container height
      const newHeight = calculateAvailableHeight();
      setContainerHeight(newHeight);
      
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      
      // Adjust camera position based on container size
      const sizeFactor = Math.min(w, h) / 500; // Normalize based on a reference size
      camera.position.z = 8.4 + (1 - sizeFactor) * 2; // Adjust distance based on size
      
      camera.updateProjectionMatrix();
      
      // Adjust brick scale if needed
      if (brickModel) {
        const scale = 5.6 * Math.max(0.8, sizeFactor);
        brickModel.scale.set(scale, scale, scale);
      }
    }
    
    window.addEventListener("resize", onResize);
    // Initial sizing
    onResize();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

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

      autoRotateSpeed += rampRate;
      autoRotateSpeed = Math.min(autoRotateSpeed, maxSpeed);

      if (brickModel) {
        brickModel.rotation.y += autoRotateSpeed;
      }

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
        height: `${containerHeight}px`,
        position: 'relative'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
} 