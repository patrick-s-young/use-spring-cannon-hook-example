// react three
import { Canvas } from "@react-three/fiber";
// physics
import { Physics, Debug } from '@react-three/cannon';
// navigation
import { OrbitControls } from '@react-three/drei';
// ui for useSpring values
import { useControls } from 'leva';
// zustand state management
import { useStore } from './store';
// components
import { Ground } from './Ground'; 
import { Robot } from './Robot'; 
// styles
import "./styles.css";

export default function App() {
  const { setDamping, setRestLength, setStiffness } = useStore((state) => state);
  const data = useControls({ 
    damping: {
      value: 1,
      min: 0,
      max: 20,
      step: .5,
      onChange: setDamping
    },
    restLength: {
      value: .5,
      min: 0,
      max: 2,
      step: .1,
      onChange: setRestLength
    }, 
    stiffness: {
      value: 100,
      min: 0,
      max: 200,
      step: 1,
      onChange: setStiffness
    }
  })
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