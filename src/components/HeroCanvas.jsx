import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function createParticlePositions() {
  const count = 900
  const data = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    const radius = 2.8 + Math.random() * 5.2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    data[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    data[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    data[index * 3 + 2] = radius * Math.cos(phi)
  }

  return data
}

const PARTICLE_POSITIONS = createParticlePositions()

function ParticleField() {
  const pointsRef = useRef(null)

  useFrame((state, delta) => {
    if (!pointsRef.current) {
      return
    }

    pointsRef.current.rotation.x += delta * 0.01
    pointsRef.current.rotation.y += delta * 0.02
    pointsRef.current.rotation.x +=
      (state.pointer.y * 0.18 - pointsRef.current.rotation.x) * 0.03
    pointsRef.current.rotation.y +=
      (state.pointer.x * 0.1 - pointsRef.current.rotation.y) * 0.02
  })

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#7dd3fc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function CoreObject() {
  const groupRef = useRef(null)
  const ringRef = useRef(null)

  useFrame((state, delta) => {
    if (!groupRef.current || !ringRef.current) {
      return
    }

    const floatOffset = Math.sin(state.clock.elapsedTime * 0.9) * 0.18

    groupRef.current.rotation.x += delta * 0.18
    groupRef.current.rotation.y += delta * 0.24
    groupRef.current.position.x +=
      (state.pointer.x * 0.35 - groupRef.current.position.x) * 0.05
    groupRef.current.position.y +=
      (floatOffset + state.pointer.y * 0.25 - groupRef.current.position.y) * 0.05
    ringRef.current.rotation.z -= delta * 0.25
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.2, 18]} />
        <meshPhysicalMaterial
          color="#d8fbff"
          metalness={0.35}
          roughness={0.12}
          clearcoat={1}
          transmission={0.14}
          transparent
          opacity={0.96}
        />
      </mesh>

      <mesh scale={1.18}>
        <icosahedronGeometry args={[1.22, 2]} />
        <meshBasicMaterial color="#f8fafc" transparent opacity={0.14} wireframe />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} scale={1.8}>
        <torusGeometry args={[1.25, 0.03, 24, 200]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#34d399"
          emissiveIntensity={1.25}
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh rotation={[0.6, 0.8, 0]} scale={0.65}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#38bdf8"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
    </group>
  )
}

function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <fog attach="fog" args={['#030712', 4, 14]} />

      <ambientLight intensity={0.55} />
      <directionalLight
        position={[2, 2, 3]}
        intensity={1.1}
        color="#c4f1ff"
      />
      <pointLight position={[2.5, 1.5, 2]} intensity={18} color="#38bdf8" />
      <pointLight position={[-2.5, -1.4, -1]} intensity={12} color="#34d399" />
      <spotLight
        position={[0, 3, 3]}
        intensity={10}
        angle={0.35}
        penumbra={0.9}
        color="#ffffff"
      />

      <ParticleField />
      <CoreObject />
    </Canvas>
  )
}

export default HeroCanvas
