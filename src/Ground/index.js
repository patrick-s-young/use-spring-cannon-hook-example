import { useRef } from "react";
import { useCompoundBody } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber";
// configs
import { compoundShapes } from './configs';

export const Ground = () => {
  const [floorRef, floorApi] = useCompoundBody(
    () => ({
      mass: 0,
      angularVelocity: [0, -.75, 0],
      shapes: [...compoundShapes]
    }),
    useRef(null),
  )

  useFrame(({ clock }) => floorApi.rotation.set(0, clock.getElapsedTime() * -0.75, 0));

  return (
      <group ref={floorRef}>
        {compoundShapes.map(({type, args, position, color, key}) => {
          return type === 'Cylinder' ? 
            <mesh position={position} key={key}>
              <cylinderGeometry args={args}/>
              <meshStandardMaterial color={color} />
            </mesh>
            :
            <mesh position={position} key={key}>
              <sphereGeometry args={args}/>
              <meshStandardMaterial color={color} />
            </mesh> })
        }
      </group>
  )
}