'use client';
import * as Three from 'three';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BlossomPage = () => {
  // `current`プロパティがHTMLDivElementを指すように型注釈を追加
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.currentがnullでないことを確認
    if (ref.current === null) return;

    const scene = new Three.Scene();
    //カメラを追加
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 500);
    //レンダラーを追加
    const renderer = new Three.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    //テクスチャーを追加
    const texture = new Three.TextureLoader().load('./earth.jpg');

    ref.current.appendChild(renderer.domElement);
    //ジオメトリー
    const ballGeometry = new Three.SphereGeometry(100, 64, 32);
    const planeGeometry = new Three.PlaneGeometry(100, 100, 100);

    //バッファジオメトリー
    const bufferGeometry = new Three.BufferGeometry();

    const positionsArray = new Float32Array(9);
    positionsArray[0] = 0;
    positionsArray[1] = 0;
    positionsArray[2] = 0;
    positionsArray[3] = 0;
    positionsArray[4] = 100;
    positionsArray[5] = 0;
    positionsArray[6] = 100;
    positionsArray[7] = 0;
    positionsArray[8] = 0;

    console.log(positionsArray);

    const positionsAttribute = new Three.BufferAttribute(positionsArray, 3);
    bufferGeometry.setAttribute('position', positionsAttribute);

    const boxGeometry = new Three.BoxGeometry(100, 100, 100);
    //マテリアル
    const Material = new Three.MeshBasicMaterial({
      // map: texture,
      // color: 0xffffff,
      // wireframe: false,
    });

    //メッシュ
    const ballMesh = new Three.Mesh(ballGeometry, Material);
    const planeMesh = new Three.Mesh(planeGeometry, Material);
    const bufferMesh = new Three.Mesh(bufferGeometry, Material);

    planeMesh.position.x = -200;
    // scene.add(ballMesh, planeMesh);
    scene.add(bufferMesh);

    //平行光源
    const directionalLight = new Three.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    //ポイント光源
    const pointLight = new Three.PointLight(0xffffff, 3000);
    pointLight.position.set(-100, -100, -100);
    scene.add(pointLight);

    //ポイント光源のヘルパー(カメラの位置がわかる)
    const pointLightHelper = new Three.PointLightHelper(pointLight, 30);
    scene.add(pointLightHelper);

    //マウス操作ができるように
    const controls = new OrbitControls(camera, renderer.domElement);

    //ブラウザのリサイズに対応
    const onWindowResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onWindowResize);

    //レンダリング
    renderer.render(scene, camera);

    const animate = () => {
      //ポイント光源の巡回
      pointLight.position.set(
        200 * Math.sin(Date.now() / 500),
        200 * Math.sin(Date.now() / 1000),
        200 * Math.cos(Date.now() / 500),
      );
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={ref} className="pt-40 mb-96 font-sans relative h-screen">
      <div className=" absolute h-screen -z-10 w-screen">
        <Image
          src="/space.jpg"
          alt="blossom"
          height={1000}
          width={1000}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />{' '}
      </div>
    </div>
  );
};

export default BlossomPage;
