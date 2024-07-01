'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

const ARView = dynamic(() => import('react-three-mind').then((mod) => mod.ARView), { ssr: false });
const ARAnchor = dynamic(() => import('react-three-mind').then((mod) => mod.ARAnchor), { ssr: false });

export default function ModelComponent({ model }) {
  const modelRef = useRef();

  return(
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

          </ARAnchor>
        </ARView>

    </div>  
  );
}