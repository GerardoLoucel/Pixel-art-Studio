import React from 'react';
import * as THREE from 'three';

const Sky = () => {
  return (
    <mesh renderOrder={-1}>
      <sphereGeometry args={[500, 64, 64]} />
      <meshBasicMaterial
        color="black" // Set the material color to black
        side={THREE.BackSide}
        depthWrite={false} // Prevents the sky from affecting the depth buffer
      />
    </mesh>
  );
};

export default Sky;