'use client';

import { ARView, ARFaceMesh, ARAnchor } from "react-three-mind";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
// import StaticAABB from "../public/Claveles_MarianaJU - Mariana JU.glb"

export default function Home() {

  const model = useGLTF ('./Azucenas_MarianaJU - Mariana JU.glb')
  const modelRef = useRef();

  return (
    
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <div className="w-full h-full">
        <ARView
          imageTargets={`/targets.mind`}
          filterMinCF={0.1}
          filterBeta={10000}
          missTolerance={10}
          warmupTolerance={0}
        >
          <ARAnchor
            target={0}
            >
              <primitive ref={modelRef} object={model.scene} scale={0.005} position={[-1,-1,-1]} />
              <directionalLight color={'#fff'} shadow={true} intensity={4} position={[0,20,10]}/>
              {/* <StaticAABB childrenRef={modelRef} helper={true} /> */}
            {/* <mesh position={[props["position-x"],props["position-y"],props["position-z"]]}>
              <boxGeometry args={[8, 8, 2]} />
              <meshStandardMaterial />
            </mesh> */}
                        {/* <ambientLight />

            <pointLight position={[10, 10, 10]} />
            <mesh >
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial color={"hotpink"} />
            </mesh> */}

          </ARAnchor>
        </ARView>
        {/* <ARView
            imageTargets="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.mind"
            filterMinCF={1}
            filterBeta={10000}
            missTolerance={0}
            warmupTolerance={0}
          >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ARAnchor target={0}>
            <mesh >
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial color={"hotpink"} />
            </mesh>
          </ARAnchor>
        </ARView> */}
      </div>
    </main>
  );
}
