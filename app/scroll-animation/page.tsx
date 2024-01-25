'use client';
import { motion } from 'framer-motion';
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type AnimationScript = {
  start: number;
  end: number;
  function: () => void;
};

const ScrollAnimation = () => {
  // `current`プロパティがHTMLDivElementを指すように型注釈を追加
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ref.currentがnullでないことを確認
    if (ref.current === null) return;
    const canvas = document.querySelector('#webgl');
    if (!canvas) return;

    const scene = new Three.Scene();
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 6;
    scene.add(camera);

    const renderer = new Three.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    ref.current.appendChild(renderer.domElement);

    //背景を追加
    const TextureLoader = new Three.TextureLoader();
    const normalTexture = TextureLoader.load('/scene-bg.jpg');
    scene.background = normalTexture;

    //glTFモデルを追加;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/models/yellow_plaster_4k.gltf', (gltf) => {
      const model = gltf.scene;
      model.rotation.x = -Math.PI / 3;
      model.scale.set(1, 1, 1);
      scene.add(model);
    });

    //オブジェクトの追加
    const boxGeometry = new Three.BoxGeometry(5, 5, 5, 10);
    const boxMaterial = new Three.MeshNormalMaterial();
    const box = new Three.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 1, -15);
    box.rotation.set(1, 1, 0);

    const torusGeometry = new Three.TorusGeometry(8, 2, 16, 100);
    const torusMaterial = new Three.MeshNormalMaterial();
    const torus = new Three.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, 1, 10);
    scene.add(box, torus);

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

    //線形補間
    let scrollParcent = 0;
    function lerp(x: any, y: any, a: any) {
      return (1 - a) * x + a * y;
    }
    function scaleParcent(start: number, end: number) {
      return (scrollParcent - start) / (end - start);
    }

    //スクロールアニメーション
    const animationScripts: AnimationScript[] = [];
    animationScripts.push({
      start: 0,
      end: 40,
      function: () => {
        camera.lookAt(box.position);
        camera.position.set(0, 1, 10);
        box.position.z = lerp(-15, 2, scaleParcent(0, 40));
        torus.position.z = lerp(10, -20, scaleParcent(0, 40));
      },
    });

    animationScripts.push({
      start: 40,
      end: 60,
      function: () => {
        camera.lookAt(box.position);
        camera.position.set(0, 1, 10);
        box.rotation.z = lerp(1, Math.PI, scaleParcent(40, 60));
        box.rotation.y = lerp(1, Math.PI, scaleParcent(40, 60));
      },
    });

    animationScripts.push({
      start: 60,
      end: 80,
      function: () => {
        camera.lookAt(box.position);
        camera.position.x = lerp(0, -15, scaleParcent(60, 80));
        camera.position.y = lerp(1, 15, scaleParcent(60, 80));
        camera.position.z = lerp(10, 25, scaleParcent(60, 80));
      },
    });

    animationScripts.push({
      start: 80,
      end: 100,
      function: () => {
        camera.lookAt(box.position);
        box.rotation.x += 0.02;
        box.rotation.y += 0.02;
      },
    });

    //ブラウザのスクロール率を取得

    document.body.onscroll = () => {
      scrollParcent =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
        100;
      console.log(scrollParcent);
    };
    function playScroolAnimation() {
      animationScripts.forEach((animation: any) => {
        if (scrollParcent >= animation.start && scrollParcent <= animation.end)
          animation.function();
      });
    }

    //アニメーション
    const animate = () => {
      requestAnimationFrame(animate);
      playScroolAnimation();
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
      <canvas id="webgl" className=" fixed top-0 left-0" />
      <main className=" absolute w-screen h-screen z-10 text-white mt-[70px]">
        <section className=" h-screen p-[20px]">
          <div
            // variants={{
            //   offscreen: {
            //     y: 100,
            //     opacity: 0,
            //   },
            //   onscreen: {
            //     y: 0,
            //     opacity: 1,
            //     transition: {
            //       duration: 1,
            //     },
            //   },
            // }}
            // initial="offscreen" // 初期表示はoffscreen
            // whileInView="onscreen" // 画面内に入ったらonscreen
            // viewport={{ once: false, amount: 0 }}
            className="relative z-10 mx-auto max-w-[90%] font-bold"
          >
            <h1 className=" mt-40 text-3xl leading-tight lg:mt-40  lg:text-[80px]">
              データドリブンな
              <br />
              採用サイト制作
            </h1>
            <p className="mt-5 w-[90%] lg:w-[55%] text-[30px]">
              採用マーケティングに必要なデータの蓄積、分析、改善を実施。 <br />
              データに基づいて毎月サイトデザインをアップデート。
            </p>
          </div>
        </section>
        <section className=" h-screen p-[20px]">
          <div
            id="message"
            className="relative h-[500px] snap-start overflow-hidden  font-mincho text-white lg:h-[900px]"
          >
            {' '}
            <div className="absolute bottom-0 left-0  right-0 top-20 z-10 mb-40 flex items-center justify-center">
              <div className="text-center">
                <motion.h2
                  variants={{
                    offscreen: {
                      y: 50,
                      opacity: 0,
                    },
                    onscreen: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="offscreen" // 初期表示はoffscreen
                  whileInView="onscreen" // 画面内に入ったらonscreen
                  viewport={{ once: false, amount: 0 }}
                  className=" text-xl lg:text-3xl"
                >
                  納品からがスタート
                </motion.h2>
                <motion.p
                  variants={{
                    offscreen: {
                      y: 50,
                      opacity: 0,
                    },
                    onscreen: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="offscreen" // 初期表示はoffscreen
                  whileInView="onscreen" // 画面内に入ったらonscreen
                  viewport={{ once: false, amount: 0 }}
                  className="mt-10 leading-loose lg:text-lg"
                >
                  当社では、先進的なデータ分析に基づき、
                  <br />
                  効果的な採用サイトを企画・制作しています。
                  <br />
                  <br /> 単に美しいデザインを提供するだけでなく、 <br />{' '}
                  毎月の詳細なパフォーマンス分析により <br />{' '}
                  専任のプロフェッショナルがお客様と密接に連携し、
                  <br /> サイトの継続的な改善と最適化を実現します。 <br /> <br />
                  これにより、採用成功率の向上とターゲット層への <br />
                  効果的なアプローチが可能になります。
                </motion.p>
              </div>
            </div>{' '}
            <motion.div
              variants={{
                offscreen: {
                  y: 200,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 4,
                  },
                },
              }}
              initial="offscreen" // 初期表示はoffscreen
              whileInView="onscreen" // 画面内に入ったらonscreen
              viewport={{ once: false, amount: 0 }}
              className=" z-0 h-full w-full  opacity-70"
            ></motion.div>
          </div>
        </section>
        <div id="whyus">
          <div className=" relative pt-20 text-white lg:h-screen">
            <div className="  mx-auto max-w-[90%]">
              {/* <SectionHeader
                jTitle="私たちの強み"
                eTitle="Why us"
                eColor="text-gray-100"
                jColor="text-white"
              /> */}
              <div className=" mt-10 w-full justify-center lg:mt-20 lg:flex">
                <motion.div
                  variants={{
                    offscreen: {
                      y: 100,
                      opacity: 0,
                    },
                    onscreen: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="offscreen" // 初期表示はoffscreen
                  whileInView="onscreen" // 画面内に入ったらonscreen
                  viewport={{ once: false, amount: 0 }}
                  className=" mr-20 hidden lg:block"
                ></motion.div>
                <motion.div
                  variants={{
                    offscreen: {
                      y: 100,
                      opacity: 0,
                    },
                    onscreen: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="offscreen" // 初期表示はoffscreen
                  whileInView="onscreen" // 画面内に入ったらonscreen
                  viewport={{ once: false, amount: 0 }}
                  className=" leading-relaxed lg:max-w-[40%] "
                >
                  <div>
                    <p className=" lg:text-[96px] text-[60px] text-gray-200 lg:-ml-10">01</p>
                    <h2 className=" lg:mt-0 -mt-5 text-xl lg:text-2xl">
                      データ分析と
                      <br className=" lg:hidden" />
                      競合リサーチ
                    </h2>
                  </div>
                  <div className="mt-10  lg:text-lg">
                    <p className=" ">
                      自社と採用競合になっている企業の採用サイトを分析して、求職者はどこに関心を持っているのかを探ります。
                    </p>

                    <p className=" mt-10">
                      毎月レポートも配信を行い、常にアップデートしていきます。
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    offscreen: {
                      y: 100,
                      opacity: 0,
                    },
                    onscreen: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                  }}
                  initial="offscreen" // 初期表示はoffscreen
                  whileInView="onscreen" // 画面内に入ったらonscreen
                  viewport={{ once: false, amount: 0 }}
                  className=" mr-20 block lg:hidden"
                ></motion.div>
              </div>
            </div>
          </div>

          <div className=" relative text-white lg:h-screen">
            <div className="  mx-auto max-w-[90%]">
              {/* <SectionHeader
            jTitle='私たちの強み'
            eTitle='Why us'
            eColor='text-gray-100'
            jColor='text-white'
          /> */}

              <motion.div
                variants={{
                  offscreen: {
                    y: 100,
                    opacity: 0,
                  },
                  onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
                className=" lg:pt-20 justify-center pt-10 lg:flex"
              >
                <div className=" leading-relaxed lg:max-w-[40%]">
                  <p className=" lg:text-[96px] text-[60px] text-gray-200 lg:-ml-10">02</p>
                  <h2 className=" lg:mt-0 -mt-4 text-xl lg:text-2xl">
                    採用戦略を基点とした
                    <br className="lg:hidden" />
                    サイト設計
                  </h2>
                  <div className="mt-10  lg:text-lg">
                    <p className=" ">
                      弊社はプロ人事シェアリングサービスの 「SpeciaLism HR」を運営しており、採用の
                      スペシャリストが多数登録。
                    </p>
                    <p className=" mt-10">
                      求職者の行動原理から逆算した採用サイトの設計を行います。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <section className=" h-screen p-[20px]">
          <h2>お問い合わせ</h2>
          <p>お問い合わせはこちらから</p>
        </section>
      </main>
      {/* <div className=" absolute top-0 -z-10 h-screen w-screen">
        <Image
          src="/bg.jpg"
          alt="blossom"
          fill
          sizes="100vw" // 画像サイズをビューポート幅に設定
          priority
        />
      </div> */}
    </div>
  );
};

export default ScrollAnimation;
