'use client';
import * as Three from 'three';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';
import { gu, tr } from 'date-fns/locale';

const UiDebug = () => {
  // `current`プロパティがHTMLDivElementを指すように型注釈を追加
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.currentがnullでないことを確認
    if (ref.current === null) return;

    const gui = new GUI();
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
    const boxGeometry = new Three.BoxGeometry(100, 100, 100);

    //マテリアル
    const Material = new Three.MeshBasicMaterial({
      color: 'red',
      wireframe: true,
    });

    //メッシュ
    const box = new Three.Mesh(boxGeometry, Material);
    scene.add(box);
    //デバッグ用
    const positionFloder = gui.addFolder('position');

    positionFloder.add(box.position, 'x', -100, 100).name('boxX');
    positionFloder.add(box.position, 'y', -100, 100).name('boxY');
    positionFloder.add(box.position, 'z', -100, 100).name('boxZ');
    positionFloder.add(box.rotation, 'x', 0, Math.PI * 2).name('boxRX');
    positionFloder.add(box.rotation, 'y', 0, Math.PI * 2).name('boxRY');
    positionFloder.add(box.rotation, 'z', 0, Math.PI * 2).name('boxRZ');

    positionFloder.add(box, 'visible').name('boxVisible');
    positionFloder.addColor(Material, 'color').name('boxColor');

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

export default UiDebug;
