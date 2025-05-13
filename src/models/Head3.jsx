
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import HeadScene from "../../public/assets/3d/head3.glb"
const Head3 = (props)=> {
  const { nodes, materials } = useGLTF(HeadScene)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(HeadScene)
export default Head3
