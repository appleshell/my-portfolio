import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Preload,
  useTexture,
  OrbitControls,
  Float,
} from '@react-three/drei';
import CanvasLoader from '../Loader';

interface IProps {
  icon: string;
}

const Ball: FC<IProps> = ({ icon }) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: FC<IProps> = ({ icon }) => (
  <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball icon={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
