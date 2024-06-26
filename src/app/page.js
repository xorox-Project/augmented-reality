'use client';

import { ARView, ARFaceMesh, ARAnchor } from "react-three-mind";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ARView
          imageTargets={`/targets.mind`}
          filterMinCF={1}
          filterBeta={10000}
          missTolerance={10}
          warmupTolerance={0}
        >
          <ARAnchor
            target={0}
            >
                        <ambientLight />

            <pointLight position={[10, 10, 10]} />
            <mesh >
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial color={"hotpink"} />
            </mesh>
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
