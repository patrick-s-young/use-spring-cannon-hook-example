// React Three
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
// components
import { Ground } from './Ground'; 
import { Robot } from './Robot'; 
// styles
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 55, position: [0, 0.95, 8] }}>
        <color attach="background" args={['lightblue']} />
        <OrbitControls />
        <Physics defaultContactMaterial={{ friction: 0.3, restitution: 0.5 }}>
          <Debug scale={1} color='green'>
            <Robot />
            <Ground /> 
          </Debug> 
        </Physics>
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
      </Canvas>
    </div>
  );
}