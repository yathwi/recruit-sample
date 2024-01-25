'use client';
import * as Three from 'three';
import Image from 'next/image';
import { use, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import * as dat from 'lil-gui';
import { get } from 'http';

const Practice = () => {
  // `current`プロパティがHTMLDivElementを指すように型注釈を追加
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.currentがnullでないことを確認
    if (ref.current === null) return;
    const canvas = document.querySelector('.webgl');
    if (!canvas) return;

    //UIデバッグ
    const gui = new dat.GUI();

    const scene = new Three.Scene();
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new Three.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 6;
    scene.add(camera);

    const renderer = new Three.WebGLRenderer({
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    ref.current.appendChild(renderer.domElement);

    //オブジェクト
    const material = new Three.MeshPhysicalMaterial({
      color: '#3c94d7',
      metalness: 0.4,
      roughness: 0.4,
      flatShading: true,
    });

    gui.addColor(material, 'color');
    gui.add(material, 'metalness').min(0).max(1).step(0.01);
    gui.add(material, 'roughness').min(0).max(1).step(0.01);
    gui.add(material, 'flatShading');

    //メッシュ
    const mesh1 = new Three.Mesh(new Three.TorusGeometry(0.8, 0.2, 16, 60), material);
    const mesh2 = new Three.Mesh(new Three.OctahedronGeometry(0.8), material);
    const mesh3 = new Three.Mesh(new Three.TorusKnotGeometry(0.8, 0.2, 16, 60), material);
    const mesh4 = new Three.Mesh(new Three.IcosahedronGeometry(0.8), material);

    //パーティクルを追加
    const particlesGeometry = new Three.BufferGeometry();
    const partivlesCount = 700;

    const positionArray = new Float32Array(partivlesCount * 3);
    for (let i = 0; i < partivlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 9;
    }
    particlesGeometry.setAttribute('position', new Three.BufferAttribute(positionArray, 3));
    //マテリアル
    const particlesMaterial = new Three.PointsMaterial({
      size: 0.025,
      sizeAttenuation: true,
      color: '#fffff',
    });
    //ポイント
    const particles = new Three.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    //ライトを追加
    const directionalLight = new Three.DirectionalLight('#ffffff', 5);
    scene.add(directionalLight);
    directionalLight.position.set(0.5, 1, 0);

    //ブラウザのリサイズ
    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    mesh1.position.set(2, 0, 0);
    mesh2.position.set(-1, 0, 0);
    mesh3.position.set(2, 0, -6);
    mesh4.position.set(5, 0, 3);

    scene.add(mesh1, mesh2, mesh3, mesh4);
    const meshes = [mesh1, mesh2, mesh3, mesh4];

    renderer.render(scene, camera);

    const clock = new Three.Clock();

    //ホイール
    let speed = 0;
    let rotation = 0;
    window.addEventListener('wheel', (e) => {
      speed += e.deltaY * 0.0002;
    });

    const rot = () => {
      rotation += speed;
      speed *= 0.98;
      //ジオメトリ全体を回転
      mesh1.position.x = 2 + 3.8 * Math.cos(rotation);
      mesh1.position.z = -3 + 3.8 * Math.sin(rotation);
      mesh2.position.x = 2 + 3.8 * Math.cos(rotation + Math.PI / 2);
      mesh2.position.z = -3 + 3.8 * Math.sin(rotation + Math.PI / 2);
      mesh3.position.x = 2 + 3.8 * Math.cos(rotation + Math.PI);
      mesh3.position.z = -3 + 3.8 * Math.sin(rotation + Math.PI);
      mesh4.position.x = 2 + 3.8 * Math.cos(rotation + 3 * (Math.PI / 2));
      mesh4.position.z = -3 + 3.8 * Math.sin(rotation + 3 * (Math.PI / 2));
      requestAnimationFrame(rot);
    };
    //カーソルの位置を取得
    const cursor: any = {};
    cursor.x = 0;
    cursor.y = 0;
    window.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX / sizes.width - 0.5;
      cursor.y = e.clientY / sizes.height - 0.5;
      console.log(cursor.x);
      // console.log(cursor);
    });

    //アニメーション
    const animate = () => {
      renderer.render(scene, camera);
      const getDeltaTime = clock.getDelta();
      for (let i = 0; i < meshes.length; i++) {
        meshes[i].rotation.y += 0.02;
        meshes[i].rotation.x += 0.02;
      }
      //カメラの制御
      camera.position.x = cursor.x * 5;
      camera.position.y = -cursor.y * 5;
      rot();
      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={ref} className=" font-sans mb-0 h-screen ">
      {' '}
      <canvas className="webgl absolute top-0 left-0 outline-none" />
      <div>
        {/* <div className=" text-white font-mincho w-[80%] mx-auto mt-20">
          <h1 className=" text-[50px] font-bold">データドリブンな採用サイト</h1>
          <p className=" w-96 mt-10">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
          </p>
        </div> */}
      </div>
      <div className=" absolute top-0 -z-10 h-screen w-screen">
        <Image
          src="/bg.jpg"
          alt="blossom"
          fill
          sizes="100vw" // 画像サイズをビューポート幅に設定
          priority
        />
      </div>
    </div>
  );
};

export default Practice;
