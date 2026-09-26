'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric ring that orbits slowly
function OrbitRing({ radius, speed, tilt, color }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2;
      pts.push(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.3, Math.sin(angle) * radius);
    }
    return new Float32Array(pts);
  }, [radius]);

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <Points positions={points} stride={3}>
        <PointMaterial size={0.012} color={color} transparent opacity={0.5} sizeAttenuation />
      </Points>
    </group>
  );
}

// Ambient particle field
function ParticleField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.008} color="#a855f7" transparent opacity={0.35} sizeAttenuation />
    </Points>
  );
}

// Slowly rotating icosahedron wireframe
function FloatingGeo({ position, speed }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.7;
      ref.current.rotation.y += delta * speed;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.18, 0]} />
      <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.4} />
    </mesh>
  );
}

// Mouse-reactive camera
function SceneCamera({ px, py }) {
  useFrame(({ camera }) => {
    const tx = (px.get() - 0.5) * 0.6;
    const ty = (py.get() - 0.5) * -0.4;
    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroOrbit({ px, py }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 55 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <SceneCamera px={px} py={py} />
      <ParticleField />
      <OrbitRing radius={1.4} speed={0.18} tilt={0.4} color="#a855f7" />
      <OrbitRing radius={1.8} speed={-0.12} tilt={1.1} color="#ec4899" />
      <OrbitRing radius={1.1} speed={0.25} tilt={0.9} color="#818cf8" />
      <FloatingGeo position={[1.2, 0.8, 0]} speed={0.4} />
      <FloatingGeo position={[-1.1, -0.7, 0.3]} speed={0.3} />
      <FloatingGeo position={[0.3, -1.2, -0.2]} speed={0.5} />
    </Canvas>
  );
}
