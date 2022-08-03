import { useRef } from "react";
import { useSphere, useSpring } from '@react-three/cannon';

export const Robot = () => {
  // spring connecting robot's head to its torso
  const [headSpring, torsoSpring] = useSpring(useRef(null), useRef(null), {
    damping: 1,
    restLength: .5,
    stiffness: 100,
  })

  // robot head
  const [headRef] = useSphere(() => ({ 
    args: [0.125],
    mass: .5,
    position: [0, 3, 4.5],
    linearFactor: [0, 1, 0],
    angularFactor: [0, 1, 0]
  }), headSpring)

  // robot torso
  const [torsoRef] = useSphere(() => ({
    args: [.25],
    position: [0, 1.5, 4.5],
    mass: 1,
    linearFactor: [0, 1, 0],
  }), torsoSpring);

  // robot feet
  const [feefRef] = useSphere(() => ({
    args: [.40],
    position: [0, .5, 4.5],
    mass: 1,
    linearFactor: [0, 1, 0]
  }), useRef(null));

  return (
    <>
      <mesh ref={headRef}>
        <sphereBufferGeometry args={[0.125]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={torsoRef}>
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