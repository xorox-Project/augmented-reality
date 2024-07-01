'use client';
import { useGLTF } from "@react-three/drei";
import ModelComponent from '@/components/modelComponent';

export default function Home() {

  const model = useGLTF('/azucena/a.glb')

  return (
    
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <ModelComponent model={model} />
    </main>
  );
}
