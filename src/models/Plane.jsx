import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import PlaneScene from "../assets/3d/plane.glb";

const Plane = (props) => {
  const { onRender, ...restProps } = props; // Destructure onRender prop
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (onRender) {
      onRender(); // Trigger the onRender callback when the component is mounted
    }
    if (actions) {
      Object.values(actions).forEach((action) => action.play()); // Start all animations
    }
  }, [onRender, actions]);

  return (
    <group ref={group} {...restProps} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
          <group name="24d5de9d3c554633b6a5f1616bf2a56efbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Background" />
                <group name="Null_2__Copy_" position={[0, 544.189, 1433.471]}>
                  <group
                    name="Null"
                    position={[0, -83.603, 1527.25]}
                    rotation={[-0.674, 0, 0]}
                    scale={0.189}>
                    <group
                      name="Torus_2"
                      position={[0, -0.284, -77.456]}
                      rotation={[1.565, 0, 0]}
                      scale={0.038}>
                      <mesh
                        name="Torus_2_Mat5_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus_2_Mat5_0.geometry}
                        material={materials['Mat.5']}
                      />
                    </group>
                    <group
                      name="Torus_1"
                      position={[0, -0.049, -34.487]}
                      rotation={[1.565, 0, 0]}
                      scale={0.081}>
                      <mesh
                        name="Torus_1_Mat5_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus_1_Mat5_0.geometry}
                        material={materials['Mat.5']}
                      />
                    </group>
                    <group
                      name="Torus"
                      position={[0, -0.165, -55.653]}
                      rotation={[1.565, 0, 0]}
                      scale={0.056}>
                      <mesh
                        name="Torus_Mat5_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus_Mat5_0.geometry}
                        material={materials['Mat.5']}
                      />
                    </group>
                    <group
                      name="Cone"
                      position={[0, -0.668, -55.961]}
                      rotation={[-1.583, 0, 0]}
                      scale={0.041}>
                      <mesh
                        name="Cone_Mat4_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cone_Mat4_0.geometry}
                        material={materials['Mat.4']}
                      />
                    </group>
                  </group>
                  <group name="Sphere_1" position={[0, -9.631, 7015.2]} rotation={[0.893, 0, 0]}>
                    <mesh
                      name="Sphere_1_Mat6_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sphere_1_Mat6_0.geometry}
                      material={materials['Mat.6']}
                    />
                  </group>
                  <group
                    name="Cylinder_1"
                    position={[0, 89.865, 16.135]}
                    rotation={[0.873, 0, 0]}
                    scale={0.042}>
                    <mesh
                      name="Cylinder_1_Mat4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_1_Mat4_0.geometry}
                      material={materials['Mat.4']}
                    />
                  </group>
                  <group name="Sphere" position={[0, 87.093, 12.517]} scale={0.062}>
                    <mesh
                      name="Sphere_Mat6_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sphere_Mat6_0.geometry}
                      material={materials['Mat.6']}
                    />
                  </group>
                  <group name="Cylinder" position={[0, 123.696, 12.517]}>
                    <mesh
                      name="Cylinder_Mat4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Mat4_0.geometry}
                      material={materials['Mat.4']}
                    />
                  </group>
                  <group name="Oil_Tank" position={[0, 81.634, 12.46]}>
                    <mesh
                      name="Oil_Tank_Mat6_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Oil_Tank_Mat6_0.geometry}
                      material={materials['Mat.6']}
                    />
                    <mesh
                      name="Oil_Tank_Mat8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Oil_Tank_Mat8_0.geometry}
                      material={materials['Mat.8']}
                    />
                    <mesh
                      name="Oil_Tank_Mat7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Oil_Tank_Mat7_0.geometry}
                      material={materials['Mat.7']}
                    />
                  </group>
                  <group name="Oil_Tank_2" position={[0, 39.147, 38.081]}>
                    <mesh
                      name="Oil_Tank_2__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Oil_Tank_2__0.geometry}
                      material={materials.RootNode}
                    />
                  </group>
                </group>
                <group name="Null_1__Copy___Copy_" position={[0, 390.696, 0]}>
                  <group name="Null_1" position={[6.005, 326.113, -6.019]}>
                    <mesh
                      name="Null_1_Mat1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat1_0.geometry}
                      material={materials['Mat.1']}
                    />
                    <mesh
                      name="Null_1_Mat1_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat1_0_1.geometry}
                      material={materials['Mat.1_0']}
                    />
                    <mesh
                      name="Null_1_Mat3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat3_0.geometry}
                      material={materials['Mat.3']}
                    />
                    <mesh
                      name="Null_1_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Null_1__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1__0.geometry}
                      material={materials.RootNode}
                    />
                    <mesh
                      name="Null_1_Mat2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Null_1_Mat2_0.geometry}
                      material={materials['Mat.2']}
                    />
                    <group
                      name="Cone_2"
                      position={[-1.81, -26.489, 3.35]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={[0.824, 1.609, 0.826]}>
                      <mesh
                        name="Cone_2_Mat10_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cone_2_Mat10_0.geometry}
                        material={materials['Mat.10']}
                      />
                    </group>
                  </group>
                </group>
                <group name="Physical_Sky">
                  <group name="Physical_Sky_2" />
                  <group name="Sky_Null" position={[751.59, 263.042, -327.287]}>
                    <group
                      name="Sun"
                      position={[41806.043, 117445.078, 86138.648]}
                      rotation={[-0.938, 0.28, 0.36]}
                    />
                    <group
                      name="Moon"
                      position={[2131.652, -2890.481, -1591.723]}
                      rotation={[2.074, 0.574, -2.364]}
                    />
                  </group>
                  <group name="Shadow_Plane" position={[0, 10000, 0]} />
                </group>
                <group name="Sphere_2" position={[0, 6.774, -7.092]} rotation={[0.984, 0, 0]}>
                  <group name="Sphere_3">
                    <mesh
                      name="Sphere_3_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sphere_3_Mat_0.geometry}
                      material={materials.Mat_0}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(PlaneScene);
export default Plane;