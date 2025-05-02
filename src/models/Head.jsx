
import React from 'react'
import { useGLTF } from '@react-three/drei'
import HeadScene from "../assets/3d/head.glb"

const Head = (props)=> {
  const { nodes, materials } = useGLTF(HeadScene)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.116}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.MAT_Nap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.MAT_Nap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.MAT_Nap}
        />
      </group>
    </group>
  )
}

useGLTF.preload(HeadScene)
export default Head