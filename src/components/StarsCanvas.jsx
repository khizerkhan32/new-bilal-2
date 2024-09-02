import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl') || canvas.getContext('webgl2');

    if (!context) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return (
      <div>
        <p>
          Your browser or system does not support WebGL. Please update your
          graphics drivers or try a different browser.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[0]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
