import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { extend } from '@react-three/fiber' // Corregir la importación
import { OrbitControls, TransformControls } from 'three-stdlib'
import CloudsScene from "../../public/assets/3d/cloud_station.glb"

// Extender el catálogo de JSX
extend({ OrbitControls, TransformControls })

const Clouds = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(CloudsScene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play() // Play all animations
      })
    }
    return () => {
      if (actions) {
        Object.values(actions).forEach((action) => {
          action.stop() // Stop all animations on unmount
        })
      }
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.401}>
          <group name="f2aeabd0fe4a43bda9a61acf7a5a4134fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.hill_1_3_MAT}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <group name="hill_1">
                    <group
                      name="hill_1_GEO"
                      position={[0.231, 0.626, 0.793]}
                      scale={[2.147, 1.944, 1.856]}>
                      <mesh
                        name="hill_1_GEO_hills_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hill_1_GEO_hills_MAT_0.geometry}
                        material={materials.hills_MAT}
                      />
                    </group>
                    <group name="house_1_GEO">
                      <group name="roof_GEO">
                        <mesh
                          name="roof_GEO_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.roof_GEO_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="walls_GEO">
                        <mesh
                          name="walls_GEO_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.walls_GEO_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="house_2_GEO">
                      <group name="roof_GEO_1">
                        <mesh
                          name="roof_GEO_hill_1_3_MAT_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.roof_GEO_hill_1_3_MAT_0_1.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="walls_GEO_1">
                        <mesh
                          name="walls_GEO_hill_1_3_MAT_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.walls_GEO_hill_1_3_MAT_0_1.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="house_3_GEO">
                      <group name="roof_GEO_2">
                        <mesh
                          name="roof_GEO_hill_1_3_MAT_0_2"
                          castShadow
                          receiveShadow
                          geometry={nodes.roof_GEO_hill_1_3_MAT_0_2.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="walls_GEO_2">
                        <mesh
                          name="walls_GEO_hill_1_3_MAT_0_2"
                          castShadow
                          receiveShadow
                          geometry={nodes.walls_GEO_hill_1_3_MAT_0_2.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="stairs_GEO">
                      <group name="pCube1">
                        <mesh
                          name="pCube1_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube1_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube2">
                        <mesh
                          name="pCube2_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube2_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube3">
                        <mesh
                          name="pCube3_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube3_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube4">
                        <mesh
                          name="pCube4_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube4_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube5">
                        <mesh
                          name="pCube5_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube5_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube6">
                        <mesh
                          name="pCube6_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube6_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube7">
                        <mesh
                          name="pCube7_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube7_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube8">
                        <mesh
                          name="pCube8_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube8_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="sign">
                      <group name="pCylinder3">
                        <mesh
                          name="pCylinder3_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder3_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube9">
                        <mesh
                          name="pCube9_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube10">
                        <mesh
                          name="pCube10_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube10_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube11">
                        <mesh
                          name="pCube11_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube11_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube12">
                        <mesh
                          name="pCube12_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube12_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="cloud1">
                      <mesh
                        name="cloud1_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud1_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="cloud2">
                      <mesh
                        name="cloud2_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud2_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="rocks">
                      <group name="rock1">
                        <mesh
                          name="rock1_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock1_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock2">
                        <mesh
                          name="rock2_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock2_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock3">
                        <mesh
                          name="rock3_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock3_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock4">
                        <mesh
                          name="rock4_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock4_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock5">
                        <mesh
                          name="rock5_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock5_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock6">
                        <mesh
                          name="rock6_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock6_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock7">
                        <mesh
                          name="rock7_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock7_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock8">
                        <mesh
                          name="rock8_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock8_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="rock9">
                        <mesh
                          name="rock9_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.rock9_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="hill_2">
                    <group name="sign_1">
                      <group name="pCylinder4">
                        <mesh
                          name="pCylinder4_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder4_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube13">
                        <mesh
                          name="pCube13_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube13_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube14">
                        <mesh
                          name="pCube14_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube14_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube15">
                        <mesh
                          name="pCube15_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube15_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                    </group>
                    <group name="windmillBase">
                      <mesh
                        name="windmillBase_hill_2_4_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.windmillBase_hill_2_4_MAT_0.geometry}
                        material={materials.hill_2_4_MAT}
                      />
                      <group name="axle" position={[3.497, 4.889, -3.483]} rotation={[0, 0, 1.209]}>
                        <mesh
                          name="axle_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.axle_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                        <group name="arm" position={[0, 0.483, 0.061]}>
                          <mesh
                            name="arm_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.arm_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                          <group name="sail" position={[-3.497, -5.372, 3.422]}>
                            <mesh
                              name="sail_hill_2_4_MAT_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.sail_hill_2_4_MAT_0.geometry}
                              material={materials.hill_2_4_MAT}
                            />
                          </group>
                        </group>
                        <group name="arm1" position={[0.483, 0, 0.061]}>
                          <mesh
                            name="arm1_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.arm1_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                          <group name="sail_1" position={[-3.98, -4.889, 3.422]}>
                            <mesh
                              name="sail_hill_2_4_MAT_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.sail_hill_2_4_MAT_0_1.geometry}
                              material={materials.hill_2_4_MAT}
                            />
                          </group>
                        </group>
                        <group name="arm2" position={[0, -0.483, 0.061]}>
                          <mesh
                            name="arm2_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.arm2_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                          <group name="sail_2" position={[-3.497, -4.405, 3.422]}>
                            <mesh
                              name="sail_hill_2_4_MAT_0_2"
                              castShadow
                              receiveShadow
                              geometry={nodes.sail_hill_2_4_MAT_0_2.geometry}
                              material={materials.hill_2_4_MAT}
                            />
                          </group>
                        </group>
                        <group name="arm3" position={[-0.483, 0, 0.061]}>
                          <mesh
                            name="arm3_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.arm3_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                          <group name="sail_3" position={[-3.014, -4.889, 3.422]}>
                            <mesh
                              name="sail_hill_2_4_MAT_0_3"
                              castShadow
                              receiveShadow
                              geometry={nodes.sail_hill_2_4_MAT_0_3.geometry}
                              material={materials.hill_2_4_MAT}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="cloud3">
                      <mesh
                        name="cloud3_hill_2_4_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud3_hill_2_4_MAT_0.geometry}
                        material={materials.hill_2_4_MAT}
                      />
                    </group>
                    <group
                      name="hill_2_GEO"
                      position={[2.714, 2.646, -3.494]}
                      scale={[1.742, 1.331, 1.689]}>
                      <mesh
                        name="hill_2_GEO_hills_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hill_2_GEO_hills_MAT_0.geometry}
                        material={materials.hills_MAT}
                      />
                    </group>
                  </group>
                  <group name="hill_3">
                    <group name="bridge">
                      <group name="bridgePlanks">
                        <group name="pCube16">
                          <mesh
                            name="pCube16_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube16_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube17">
                          <mesh
                            name="pCube17_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube17_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube18">
                          <mesh
                            name="pCube18_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube18_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube19">
                          <mesh
                            name="pCube19_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube19_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube20">
                          <mesh
                            name="pCube20_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube20_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube21">
                          <mesh
                            name="pCube21_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube21_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube22">
                          <mesh
                            name="pCube22_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube22_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube23">
                          <mesh
                            name="pCube23_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube23_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube24">
                          <mesh
                            name="pCube24_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube24_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCube25">
                          <mesh
                            name="pCube25_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube25_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                      </group>
                      <group name="supportRopes">
                        <group name="pCylinder5">
                          <mesh
                            name="pCylinder5_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder5_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder6">
                          <mesh
                            name="pCylinder6_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder6_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder7">
                          <mesh
                            name="pCylinder7_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder7_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder8">
                          <mesh
                            name="pCylinder8_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder8_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder9">
                          <mesh
                            name="pCylinder9_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder9_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder10">
                          <mesh
                            name="pCylinder10_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder10_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder11">
                          <mesh
                            name="pCylinder11_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder11_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder12">
                          <mesh
                            name="pCylinder12_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder12_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder13">
                          <mesh
                            name="pCylinder13_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder13_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder14">
                          <mesh
                            name="pCylinder14_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder14_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder15">
                          <mesh
                            name="pCylinder15_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder15_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder16">
                          <mesh
                            name="pCylinder16_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder16_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder17">
                          <mesh
                            name="pCylinder17_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder17_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder18">
                          <mesh
                            name="pCylinder18_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder18_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder19">
                          <mesh
                            name="pCylinder19_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder19_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder20">
                          <mesh
                            name="pCylinder20_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder20_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder21">
                          <mesh
                            name="pCylinder21_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder21_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder22">
                          <mesh
                            name="pCylinder22_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder22_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder23">
                          <mesh
                            name="pCylinder23_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder23_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="pCylinder24">
                          <mesh
                            name="pCylinder24_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder24_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                      </group>
                      <group name="ropes">
                        <group name="rope1">
                          <mesh
                            name="rope1_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rope1_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="rope2">
                          <mesh
                            name="rope2_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rope2_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="rope3">
                          <mesh
                            name="rope3_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rope3_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                        <group name="rope4">
                          <mesh
                            name="rope4_hill_2_4_MAT_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rope4_hill_2_4_MAT_0.geometry}
                            material={materials.hill_2_4_MAT}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="weatherStation" position={[0, -0.286, 0]}>
                      <group name="polySurface2">
                        <mesh
                          name="polySurface2_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface2_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pTorus1">
                        <mesh
                          name="pTorus1_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pTorus1_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pTorus2">
                        <mesh
                          name="pTorus2_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pTorus2_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pTorus3">
                        <mesh
                          name="pTorus3_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pTorus3_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface3">
                        <mesh
                          name="polySurface3_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface3_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface4">
                        <mesh
                          name="polySurface4_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface4_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface5">
                        <mesh
                          name="polySurface5_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface5_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface6">
                        <mesh
                          name="polySurface6_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface6_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface7">
                        <mesh
                          name="polySurface7_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface7_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface8">
                        <mesh
                          name="polySurface8_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface8_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface9">
                        <mesh
                          name="polySurface9_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface9_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface10">
                        <mesh
                          name="polySurface10_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface10_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface11">
                        <mesh
                          name="polySurface11_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface11_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="polySurface12">
                        <mesh
                          name="polySurface12_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface12_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="windSock">
                      <group name="pCylinder27">
                        <mesh
                          name="pCylinder27_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder27_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCylinder25">
                        <mesh
                          name="pCylinder25_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder25_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCylinder26" />
                      <group name="pCylinder28">
                        <mesh
                          name="pCylinder28_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder28_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="cloud_sign">
                      <group name="pCube26">
                        <mesh
                          name="pCube26_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube26_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube27">
                        <mesh
                          name="pCube27_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube27_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube28">
                        <mesh
                          name="pCube28_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube28_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="cloud">
                        <mesh
                          name="cloud_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.cloud_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="sign_2">
                      <group name="pCylinder3_1">
                        <mesh
                          name="pCylinder3_hill_1_3_MAT_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder3_hill_1_3_MAT_0_1.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube9_1">
                        <mesh
                          name="pCube9_hill_1_3_MAT_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_hill_1_3_MAT_0_1.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube34">
                        <mesh
                          name="pCube34_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube34_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube35">
                        <mesh
                          name="pCube35_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube35_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                      <group name="pCube36">
                        <mesh
                          name="pCube36_hill_1_3_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube36_hill_1_3_MAT_0.geometry}
                          material={materials.hill_1_3_MAT}
                        />
                      </group>
                    </group>
                    <group name="flags1">
                      <mesh
                        name="flags1_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.flags1_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="flags2">
                      <mesh
                        name="flags2_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.flags2_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="flags3">
                      <mesh
                        name="flags3_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.flags3_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="cloud4">
                      <mesh
                        name="cloud4_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud4_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="cloud5">
                      <mesh
                        name="cloud5_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud5_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group name="cloud6">
                      <mesh
                        name="cloud6_hill_1_3_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud6_hill_1_3_MAT_0.geometry}
                        material={materials.hill_1_3_MAT}
                      />
                    </group>
                    <group
                      name="hill_3_GEO"
                      position={[-3.344, 5.884, -5.603]}
                      scale={[2.53, 1.525, 1.91]}>
                      <mesh
                        name="hill_3_GEO_hills_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hill_3_GEO_hills_MAT_0.geometry}
                        material={materials.hills_MAT}
                      />
                    </group>
                  </group>
                  <group name="hill_4">
                    <group
                      name="sign1"
                      position={[2.844, 5.425, -9.744]}
                      scale={[1.924, 1.471, 1.471]}>
                      <group name="pCylinder3_2">
                        <mesh
                          name="pCylinder3_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder3_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube9_2">
                        <mesh
                          name="pCube9_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube31">
                        <mesh
                          name="pCube31_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube31_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube32">
                        <mesh
                          name="pCube32_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube32_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube33">
                        <mesh
                          name="pCube33_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube33_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                    </group>
                    <group name="mansion">
                      <group name="pCube29">
                        <mesh
                          name="pCube29_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube29_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                      <group name="pCube30">
                        <mesh
                          name="pCube30_hill_2_4_MAT_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube30_hill_2_4_MAT_0.geometry}
                          material={materials.hill_2_4_MAT}
                        />
                      </group>
                    </group>
                    <group name="cloud7">
                      <mesh
                        name="cloud7_hill_2_4_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.cloud7_hill_2_4_MAT_0.geometry}
                        material={materials.hill_2_4_MAT}
                      />
                    </group>
                    <group name="hill_4_GEO">
                      <mesh
                        name="hill_4_GEO_hills_MAT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hill_4_GEO_hills_MAT_0.geometry}
                        material={materials.hills_MAT}
                      />
                    </group>
                  </group>
                  <group name="skybox_GEO" position={[0.218, 0.315, -3.777]} scale={15.78}>
                    <mesh
                      name="skybox_GEO_sky_MAT_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.skybox_GEO_sky_MAT_0.geometry}
                      material={materials.sky_MAT}
                    />
                  </group>
                  <group name="EVSB_FISHEVSB_FISH">
                    <group name="EVSB_FISHGEO">
                      <group name="EVSB_FISHbody_GEO" />
                      <group name="EVSB_FISHeye_L_GEO">
                        <group name="EVSB_FISHeye_L_GEO_1" />
                        <group name="EVSB_FISHpupil_L_GEO" />
                      </group>
                      <group name="EVSB_FISHeye_R_GEO">
                        <group name="EVSB_FISHeye_R_GEO_1" />
                        <group name="EVSB_FISHpupil_R_GEO" />
                      </group>
                    </group>
                    <group name="EVSB_FISHJOINTS">
                      <group name="Object_291">
                        <primitive object={nodes._rootJoint_1} />
                        <skinnedMesh
                          name="Object_293"
                          geometry={nodes.Object_293.geometry}
                          material={materials.EVSB_FISHfish_MAT}
                          skeleton={nodes.Object_293.skeleton}
                        />
                        <skinnedMesh
                          name="Object_294"
                          geometry={nodes.Object_294.geometry}
                          material={materials.EVSB_FISHfish_MAT}
                          skeleton={nodes.Object_294.skeleton}
                        />
                        <skinnedMesh
                          name="Object_296"
                          geometry={nodes.Object_296.geometry}
                          material={materials.EVSB_FISHfish_MAT}
                          skeleton={nodes.Object_296.skeleton}
                        />
                        <skinnedMesh
                          name="Object_298"
                          geometry={nodes.Object_298.geometry}
                          material={materials.EVSB_FISHfish_MAT}
                          skeleton={nodes.Object_298.skeleton}
                        />
                        <skinnedMesh
                          name="Object_300"
                          geometry={nodes.Object_300.geometry}
                          material={materials.EVSB_FISHfish_MAT}
                          skeleton={nodes.Object_300.skeleton}
                        />
                        <group name="Object_295" />
                        <group name="Object_297" />
                        <group name="Object_299" />
                      </group>
                    </group>
                  </group>
                  <group name="EVSB_FISH1EVSB_FISH">
                    <group name="EVSB_FISH1GEO">
                      <group name="EVSB_FISH1body_GEO" />
                      <group name="EVSB_FISH1eye_L_GEO">
                        <group name="EVSB_FISH1eye_L_GEO_1" />
                        <group name="EVSB_FISH1pupil_L_GEO" />
                      </group>
                      <group name="EVSB_FISH1eye_R_GEO">
                        <group name="EVSB_FISH1eye_R_GEO_1" />
                        <group name="EVSB_FISH1pupil_R_GEO" />
                      </group>
                    </group>
                    <group name="EVSB_FISH1JOINTS">
                      <group name="Object_340">
                        <primitive object={nodes._rootJoint_2} />
                        <skinnedMesh
                          name="Object_342"
                          geometry={nodes.Object_342.geometry}
                          material={materials.EVSB_FISH1fish_MAT}
                          skeleton={nodes.Object_342.skeleton}
                        />
                        <skinnedMesh
                          name="Object_343"
                          geometry={nodes.Object_343.geometry}
                          material={materials.EVSB_FISH1fish_MAT}
                          skeleton={nodes.Object_343.skeleton}
                        />
                        <skinnedMesh
                          name="Object_345"
                          geometry={nodes.Object_345.geometry}
                          material={materials.EVSB_FISH1fish_MAT}
                          skeleton={nodes.Object_345.skeleton}
                        />
                        <skinnedMesh
                          name="Object_347"
                          geometry={nodes.Object_347.geometry}
                          material={materials.EVSB_FISH1fish_MAT}
                          skeleton={nodes.Object_347.skeleton}
                        />
                        <skinnedMesh
                          name="Object_349"
                          geometry={nodes.Object_349.geometry}
                          material={materials.EVSB_FISH1fish_MAT}
                          skeleton={nodes.Object_349.skeleton}
                        />
                        <group name="Object_344" />
                        <group name="Object_346" />
                        <group name="Object_348" />
                      </group>
                    </group>
                  </group>
                  <group name="EVSB_FISH2EVSB_FISH">
                    <group name="EVSB_FISH2GEO">
                      <group name="EVSB_FISH2body_GEO" />
                      <group name="EVSB_FISH2eye_L_GEO">
                        <group name="EVSB_FISH2eye_L_GEO_1" />
                        <group name="EVSB_FISH2pupil_L_GEO" />
                      </group>
                      <group name="EVSB_FISH2eye_R_GEO">
                        <group name="EVSB_FISH2eye_R_GEO_1" />
                        <group name="EVSB_FISH2pupil_R_GEO" />
                      </group>
                    </group>
                    <group name="EVSB_FISH2JOINTS">
                      <group name="Object_389">
                        <primitive object={nodes._rootJoint_3} />
                        <skinnedMesh
                          name="Object_391"
                          geometry={nodes.Object_391.geometry}
                          material={materials.EVSB_FISH2fish_MAT}
                          skeleton={nodes.Object_391.skeleton}
                        />
                        <skinnedMesh
                          name="Object_392"
                          geometry={nodes.Object_392.geometry}
                          material={materials.EVSB_FISH2fish_MAT}
                          skeleton={nodes.Object_392.skeleton}
                        />
                        <skinnedMesh
                          name="Object_394"
                          geometry={nodes.Object_394.geometry}
                          material={materials.EVSB_FISH2fish_MAT}
                          skeleton={nodes.Object_394.skeleton}
                        />
                        <skinnedMesh
                          name="Object_396"
                          geometry={nodes.Object_396.geometry}
                          material={materials.EVSB_FISH2fish_MAT}
                          skeleton={nodes.Object_396.skeleton}
                        />
                        <skinnedMesh
                          name="Object_398"
                          geometry={nodes.Object_398.geometry}
                          material={materials.EVSB_FISH2fish_MAT}
                          skeleton={nodes.Object_398.skeleton}
                        />
                        <group name="Object_393" />
                        <group name="Object_395" />
                        <group name="Object_397" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(CloudsScene)
export default Clouds