'use client';

import { ARView, ARAnchor } from "react-three-mind";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
// import StaticAABB from "../public/Claveles_MarianaJU - Mariana JU.glb"

export default function Home() {

  const model = useGLTF ('./Azucenas_MarianaJU - Mariana JU.glb')
  const model2 = useGLTF ('/turtle.glb')

  const modelRef = useRef();

  return (
    
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <div className="w-full h-full">
        <ARView
          autoplay // Automatically starts tracking once the camera stream is ready
          flipUserCamera={false} // Prevents automatic flipping of the user camera
          imageTargets={`/targets-ana.mind`} // URL of the generated image targets features
          maxTrack={2} // Maximum number of targets tracked simultaneously
          filterMinCF={0.01} // Cutoff Frequency, decrease to reduce jittering
          filterBeta={10000} // Speed Coefficient, increase to reduce delay
          missTolerance={10} // Number of continuous frames required for a target not being detected to be marked as lost
          warmupTolerance={0} // Number of continuous frames required for a target being detected to be marked as found
        >
{/*           <ARAnchor
            target={0}
            >
              <primitive ref={modelRef} object={model.scene} scale={0.005} position={[-1,-1,-1]} />
              <directionalLight color={'#fff'} shadow={true} intensity={1} position={[0,20,10]}/>
              <directionalLight color={'#fff'} shadow={true} intensity={1} position={[0,-20,10]}/>
          </ARAnchor> */}
          <ARAnchor
            target={0}
            >
              <primitive ref={modelRef} object={model2.scene} scale={1} position={[-1,-1,-1]} />
              <directionalLight color={'#fff'} shadow={true} intensity={2} position={[0,20,10]}/>
              <directionalLight color={'#fff'} shadow={true} intensity={2} position={[0,-20,10]}/>
          </ARAnchor>
        </ARView>
      </div>
    </main>
  );
}
