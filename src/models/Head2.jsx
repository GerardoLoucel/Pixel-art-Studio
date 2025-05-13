

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import HeadScene from "../../public/assets/3d/head2.glb"

const HeadLight =(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(HeadScene)
  const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        position={[0.007, 0.001, 0.005]}
        rotation={[-1.576, -0.008, 0]}
      />
    </group>
  )
}

useGLTF.preload(HeadScene)
export default HeadLight