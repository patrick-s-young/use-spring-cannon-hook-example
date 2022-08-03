// react
import { useRef } from "react";
// cannon hooks
import { useSphere, useSpring } from '@react-three/cannon';
// zustand
import { useStore } from '../store';

export const Robot = () => {
  // useSpring values
  const { damping, restLength, stiffness } = useStore(state => state);

  // robot head
  const [headRef] = useSphere(() => ({ 
    args: [0.125],
    mass: .5,
    position: [0, 3, 4.5],
    linearFactor: [0, 1, 0],
    angularFactor: [0, 1, 0]
  }), useRef(null))

  // robot torso
  const [torsoRef] = useSphere(() => ({
    args: [.25],
    position: [0, 1.5, 4.5],
    mass: 1,
    linearFactor: [0, 1, 0]
  }), useRef(null));

  // spring connecting robot's head to its torso
  const [headSpring, torsoSpring] = useSpring(headRef, torsoRef, {
    damping,
    restLength,
    stiffness,
  }, [damping, restLength, stiffness]);

  // robot 'feet'
  const [feefRef] = useSphere(() => ({
    args: [.40],
    position: [0, .5, 4.5],
    mass: 1,
    linearFactor: [0, 1, 0]
  }), useRef(null));

  return (
    <>
      <mesh ref={headSpring}>
        <sphereBufferGeometry args={[0.125]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={torsoSpring}>
      <sphereBufferGeometry args={[0.25]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={feefRef}>
        <sphereGeometry args={[.40]} />
        <meshNormalMaterial />
      </mesh>
    </>
  )
}