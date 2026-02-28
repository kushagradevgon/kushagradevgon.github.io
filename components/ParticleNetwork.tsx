'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Lines() {
  const ref = useRef<THREE.LineSegments>(null);
  const [positions, colors] = useMemo(() => {
    const segs = 40;
    const pos = new Float32Array(segs * 2 * 3);
    const col = new Float32Array(segs * 2 * 3);
    const c = new THREE.Color(0x6366f1);
    for (let i = 0; i < segs; i++) {
      const i2 = i * 2;
      pos[i2 * 3] = (Math.random() - 0.5) * 10;
      pos[i2 * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i2 * 3 + 2] = (Math.random() - 0.5) * 6;
      pos[(i2 + 1) * 3] = (Math.random() - 0.5) * 10;
      pos[(i2 + 1) * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[(i2 + 1) * 3 + 2] = (Math.random() - 0.5) * 6;
      c.toArray(col, i2 * 3);
      c.toArray(col, (i2 + 1) * 3);
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.15}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export function ParticleNetwork() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['transparent']} />
        <ParticleField />
        <Lines />
      </Canvas>
    </div>
  );
}
