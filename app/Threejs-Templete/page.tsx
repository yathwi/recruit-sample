'use client';
import * as Three from 'three';
import Image from 'next/image';
import { use, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import * as dat from 'lil-gui';
import { get } from 'http';

const ScrollAnimation = () => {
  // `current`プロパティがHTMLDivElementを指すように型注釈を追加
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.currentがnullでないことを確認
    if (ref.current === null) return;
    const canvas = document.querySelector('.webgl');
    if (!canvas) return;

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

    //アニメーション
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
    <div ref={ref} className=" font-sans mb-0 h-screen ">
      {' '}
      <canvas className="webgl absolute top-0 left-0 outline-none" />
      <main>
        {/* <div className=" text-white font-mincho w-[80%] mx-auto mt-20">
          <h1 className=" text-[50px] font-bold">データドリブンな採用サイト</h1>
          <p className=" w-96 mt-10">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
            テキストテキストテキストテキスト テキストテキストテキストテキスト
          </p>
        </div> */}
      </main>
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

export default ScrollAnimation;
