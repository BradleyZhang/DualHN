---
title: "第四代精灵"
date: 2026-10-28T08:32:05+08:00
draft: false
source: "Hacker News"
originalTitle: "Genie 4: A new generation of world simulation"
originalUrl: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
hnUrl: ""
points: 
comments: 
---

> Today, we are announcing Genie 4, our new world model, which unlocks unprecedented realism and improves real-time interactive simulation. Genie 4 is natively multimodal, enabling audio-like music, ambient noises, and interactive dialogue to be simultaneously generated with the world.

今天，我们宣布 Genie 4，我们的新世界模型，它突破了前所未有的真实感，并提升了实时交互式模拟。Genie 4 原生多模态，实现了类似音频的音乐、环境噪音和交互式对话的同时生成与世界。

> The Genie 4 model incorporates and builds on capabilities from the Gemini family: Gemini Omni anchors the simulations in real-world appearance and behavior, while other Gemini models provide the complex reasoning needed to help maintain a simulation’s coherence and continuity.

Genie 4 模型吸收并构建于 Gemini 家族的能力之上：Gemini Omni 将模拟锚定在现实世界的外观和行为，而其他 Gemini 模型则提供维持模拟连贯性和连续性所需的复杂推理。

> With this foundation, you can set an event in motion, and Genie 4 simulates what happens next: how the world responds, how it sounds, and how the people in it move, react, and speak.

基于此基础，你可以启动一个事件， Genie 4 模拟接下来会发生的情况：世界如何响应、它听起来如何、以及人们如何移动、反应和说话。

> Understanding and simulating the world is a crucial aspect of building AGI. Genie 4 advances our ability to create safe, infinitely variable simulations that can help with everything from developing training environments for robots and agents to unlocking the creation of new interactive experiences.

理解和模拟世界是构建 AGI 的关键所在。Genie 4 能够显著提升我们创建安全、无限可变模拟环境的能力，这些模拟环境不仅有助于开发机器人和智能体的训练环境，还能 unlock 新的交互式体验的创造。

 <video controls=""><source src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/WkNULci6vI-1eQBz/genie-4__hero-film__posterframe.webm" type="video/webm"> Your browser does not support the video tag.</video>
![](https://www.youtube.com/watch?v=sFfPkUJd_Jk)

> We have started rolling Genie 4 out as a research preview for trusted testers — gathering feedback before we release it to consumers and developers, starting with Google AI Ultra subscribers in Project Genie and early access partners of the Gemini API and Google AI Studio. Join the waitlist for Genie 4 in Project Genie [here](https://forms.gle/WQnSNEM3omF7Uruu7).

我们已开始向可靠测试者推出 Genie 4 的研究预览版，目的是在正式向消费者和开发者发布前收集反馈。首先，Google AI Ultra 订阅用户、Project Genie 早期访问合作伙伴以及 Gemini API 和 Google AI Studio 的早期访问合作伙伴将获得优先体验。立即加入 Project Genie 中的 Genie 4 候补名单 [这里](https://forms.gle/WQnSNEM3omF7Uruu7)。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/e2tW3OdRkPELhHH3/wm_genie4_demo_backstage_genie3-v-genie_4_compare_with-disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Genie 4 delivers enhanced photorealism, fluid movement, and native audio. All accompanying sounds featured above are produced directly by Genie 4.

Genie 4 提供更逼真的图像、更流畅的动作和原声音效。上述所有伴随音效均由 Genie 4 直接生成。

> ## Genie 4 advances four key capabilities



请提供完整的英文原文，我将为您翻译。

> The following are recordings of real-time interactions from Genie 4, where users use standard keyboard controls for navigation and camera control, and text prompts to steer the scene as it evolves.

以下是 Genie 4 的实时交互记录，其中用户使用标准键盘控制进行导航和摄像机控制，并通过文本提示来引导场景的演变。

> ### Shaping world simulation in real-time

### 实时塑造世界模拟

> With Genie 4, you can use natural language to modify a simulation in real-time — like changing the weather, moving the camera, or introducing a new person or object — and Gemini will contextually adapt your prompt to match the surrounding scene. Between your inputs, Gemini also monitors and steers the scene to keep the world progressing cohesively.

通过 Genie 4，你可以使用自然语言实时修改模拟场景，例如改变天气、移动相机，或添加新的人物或物体。Gemini 会根据周围场景上下文自动调整你的提示词，以匹配场景需求。在你的输入之间，Gemini 还会持续监控和引导场景，确保虚拟世界连贯地发展。

> ###### Turn on audio to hear Genie 4 worlds.

开启音频以聆听 Genie 4 生成的世界。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/6EmGCHuk3yxF-wGH/wm_genie4_demo_island_piano_duet_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: Use the reference image as the exact first frame and visual basis for the scene. Preserve the same floating rectangular platform, weathered concrete edges, wild grasses, ferns, twisted small tree, warm glowing amber sphere, and the same middle-aged man in a loose brown suit playing a brass saxophone. A cinematic, highly naturalistic documentary scene, photographed on 16mm film with subtle grain, soft photographic detail, extremely low contrast, muted natural colors, lifted shadows, gentle highlights, and soft diffuse overcast light. Absolutely no HDR, no dramatic contrast, no glossy digital rendering, no artificial cinematic lighting. The platform floats in the middle of a vast, quiet lake surrounded by distant misty forests. Thin layers of fog drift above the water. The sky is pale blue-gray and overcast, with a soft, almost monochromatic atmosphere. The warm amber sphere provides a delicate contrasting glow, softly illuminating the surrounding vegetation and reflecting in the lake. Begin with a slightly closer view of the saxophone player than in the reference image, while keeping the platform, glowing sphere, tree, and surrounding lake visible. The man continues playing his saxophone naturally, with subtle breathing, finger movements, and gentle body swaying. The camera moves independently and can freely explore the entire environment, gliding smoothly over the water with gentle, controlled movement. The camera is not attached to the man or the platform. Maintain realistic spatial continuity and natural camera movement. Everything must remain photographic, physically believable, documentary-like, extremely low-contrast, and softly desaturated throughout the entire experience. One continuous shot. Natural lake ambience, distant wind, soft water movement, and realistic saxophone sound. No background music beyond the instruments physically present in the scene.

请提供参考图像，以便我能够正确处理你的请求。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/Hx57sxbj0Ia3OXDq/genie4_demo_silk-scarf_UI_with-disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Environment prompt: A wide, sun-drenched hilltop meadow filled with tall green grass and scattered purple, white, and yellow wildflowers swaying in a warm breeze. Low green shrubs dot the right side of the field while distant blue-green rolling hills stretch along the left horizon beneath a bright, partly cloudy sky. Character: Winding in sweeping S-curves through the center of the grassy meadow from the immediate foreground far into the distance is a long, continuous stream of glossy bubblegum-pink satin fabric. The shimmering pink cloth billows, ripples, and lifts softly above the wildflowers like a flowing river of silk as the wind moves beneath its folds.

环境提示词：一片宽阔、沐浴阳光的山顶草地，高大的绿草间散落着紫色、白色和黄色的野花，在温暖微风中摇曳。草地右侧点缀着低矮的绿色灌木，远处蓝绿色的起伏山丘沿着左侧地平线延伸，上方是明亮、部分多云的天空。

角色：一条绵延的口香糖粉色缎面织物带，光泽闪亮，以宽大的 S 形曲线蜿蜒穿过草地中心，从近景一直延伸至远方。粉色布料在野花上方柔和地鼓起、波动、轻轻升起，如同一条流动的丝绸之河，随风在褶皱下涌动。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/EAIt62AyeO_ZlSZD/genie4_demo_hot-air-balloon_UI_with-disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Environment prompt: A sweeping aerial view over the vast, frozen landscape of Antarctica, featuring endless snow-covered glaciers, jagged icy mountain peaks, and sculpted blue icebergs bathed in crisp polar sunlight under a clear, pale blue sky. Numerous hot air balloons dot the horizon at varying altitudes, with a large cream, red, and blue striped balloon floating prominently in the mid-distance above the ice sheet. Character prompt: Shot from a first-person POV standing inside the woven wicker basket of a flying hot air balloon, looking out over the leather-trimmed basket edge on the right side of the frame, where black padded support poles, metal rigging chains, and the dark base of the balloon canopy overhead frame the drifting polar vista.

环境提示：这是一幅从高空俯瞰南极冰雪世界的壮丽景象。广阔的冰雪大陆上，绵延不绝的雪覆盖着冰川，冰山峭壁错落有致，冰蓝色冰山在极地明亮的阳光下闪耀，湛蓝的天空倒映着纯净的光芒。在地平线上，许多热气球在不同高度飘浮，其中一架以奶油色、红色和蓝色条纹为主的巨型气球在冰盖中部上方格外醒目。角色提示：从一个悬挂在热气球编织吊篮内的第一人称视角出发，画面从右下角延伸出皮革装饰的边沿，黑色的衬垫支撑杆、金属缆绳和气球顶部篷布的深色底座将漂浮的极地美景框住，呈现出一幅动人的极地风光。

> ### Pushing the frontier in realism for physics and human action

### 推进物理与人类动作真实感的前沿

> Genie 4 introduces a new standard of realism to real-time interactive simulation. Built on an advanced physical understanding of the world, Genie 4 simulates real-world physics scenarios, such as aerodynamics, collisions, and more.



Genie 4 为实时交互式模拟树立了全新的真实感标准。基于对世界先进的物理理解，Genie 4 能够模拟真实的物理场景，例如空气动力学、碰撞等。

> The most dramatic leap is how Genie 4 simulates people, creating characters that move naturally, respond organically to their environments, and can be interactively steered in real-time.

最戏剧性的飞跃在于 Genie 4 如何模拟人类，创造出移动自然、能对环境做出有机响应，并且可以实时交互式引导的角色。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/WYS0b0zRNiNoUPSD/genie4_demo_watermelon_UI_with-disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Environment prompt: A sunlit outdoor courtyard featuring a weathered stone plinth set against a soft-focus background of lush green garden foliage and clear blue sky, bathed in bright, warm afternoon sunlight that backlights airborne droplets in crisp slow motion. Character prompt: A whole, glossy green-striped watermelon rests in the center of the stone plinth.

环境提示词：一个阳光明媚的室外庭院，背景是柔焦的郁郁葱葱的绿色花园植被和清澈的蓝天，一座风化的石基座矗立中央，沐浴在明亮温暖的午后阳光中，阳光逆光照射出清晰慢动作下的空气悬浮水滴。主体提示词：一个完整、光泽亮丽的绿色条纹西瓜静置在石基座的中央。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/iAu-BtCxO97Ng8MH/genie4_demo_maple-seed_UI_with-disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: A macro close up of a maple seed falling from the tree into the grass

微距特写的枫树种子从树上掉落到草地上

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/6M5UjZJz39r6PWJE/wm_genie4_demo_japanese_train_station_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: A crowded rural Japanese train station in the 1980s, packed with passengers waiting along the platform. The only railway inspector in a dark navy uniform stands close to the camera, observing the scene. A long, deep-red local train with many carriages occupies the railway track closest to the camera POV, stretching across the frame and extending far into the distance. The train is clearly visible in the immediate foreground, not on a distant track. People fill the platform naturally, standing, walking, boarding and waiting with luggage. Lush green mountains, cedar forests and humid summer haze surround the station. Authentic 1980s Japanese atmosphere, cinematic 35mm documentary photography, realistic perspective, asymmetrical composition, natural lighting, subtle film grain, photorealistic textures. The station must look genuinely busy, with a dense crowd of visible people throughout the platform. The red train must be on the nearest track, dominating the scene. No empty platforms, no distant train, no sparse crowds, no centered symmetrical composition.

Prompt: 20世纪 80 年代拥挤的日本乡村火车站，站台上挤满了等待的乘客。唯一一名穿深海军蓝制服的铁路检查员站在靠近摄像机的位置，观察现场。一列拥有多节车厢的长列深红色本地列车占据了摄像机视角 POV 最近的铁轨，横跨画面并延伸至远方。列车清晰可见于近景前景，而非远处轨道上。人们自然地填满站台，站立、行走、登车并携带行李等待。郁郁葱葱的青山、杉树林和潮湿的夏日薄雾环绕着车站。真实的 1980 年代日本氛围，电影化的 35mm 纪实摄影，现实透视，不对称构图，自然光线，细腻的胶片颗粒，逼真的材质纹理。车站必须看起来真正繁忙，站台各处都有密集可见的人群。红色列车必须位于最近的轨道上，主导整个场景。无空荡站台、无远处列车、无稀疏人群、无居中对称构图。

> ### Modeling how the world sounds

### 建模世界的声音

> Genie 4 is our first real-time world model to generate audio natively. Every world carries the ambient sound of its own setting, from wind in the trees to waves crashing at the beach.

Genie 4 是我们首个能够实时生成原生音频的全球模型。每个世界都带有其独特的环境音效，从树叶间的风声到海浪拍打海滩的声音，无不悉数呈现。

> The true frontier, however, is human speech. Genie 4 introduces interactive dialogue that adapts on the fly. Characters converse and react to your inputs or events in the world, all in real-time.

然而，真正的前沿是人类语音。Genie 4 引入了可即时适应的交互式对话。角色会进行交谈，并响应你的输入或世界中的事件，全部实时进行。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/ImzUsu3YUnkjGByt/wm_genie4_demo_stained_glass_world_UI_with_disclaimer_16x9_final_Stitched_Clip.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: Create a fully three-dimensional immersive stained-glass landscape that feels like a handcrafted crystal window brought to life. The world should be explorable, as if the camera can move freely through a giant 3D stained-glass environment. The entire scene must have a stained-glass / crystal-window look: translucent colored glass, dark lead outlines, glowing layered panels, volumetric depth, and artisanal glass textures. Show a beautiful landscape with a flowing river running through green fields, flowers in the foreground, trees, distant mountains, clouds, and a radiant sun in the sky. The river should feel like flowing translucent blue glass, the flowers like upright stained-glass sculptures, the grass and trees like layered colored-glass forms, the mountains like stacked glass panels, and the sun like a luminous circular stained-glass element. Everything must feel spatial, cohesive, luminous, and handcrafted, with depth and the sensation that the viewer can move through it in three dimensions. The camera should be able to travel through the scene as if walking or gliding inside this 3D stained-glass world. Keep the world beautiful, magical, and fully consistent in style. Absolutely everything must remain made of stained glass or crystal at all times, including the grass, the water, the sky, the clouds, the flowers, the trees, the mountains, the sun, and all visible surfaces. Do not introduce any natural real-world textures. No real grass, no real water, no normal sky, and no realism outside of the stained-glass universe. No text, no modern objects, no realism outside of the stained-glass universe

构建一个完全三维的沉浸式彩绘玻璃风景，仿佛一件手工精制的水晶窗 brought to life。整个世界应当可探索，仿佛摄像机可以在巨大的3D彩绘玻璃环境中自由移动。整个场景必须呈现彩绘玻璃/水晶窗的风格：半透明彩色玻璃、深色铅线轮廓、发光的层叠面板、体积深度和手工玻璃纹理。展示一幅美丽的风景，有一条穿越绿色草甸的 flowing river，前景有花朵，树木、远处的山丘、云朵和天空中的炽烈太阳。河 river 应呈现出流动的半透明蓝色玻璃的感觉，花朵如同直立的彩绘玻璃雕塑，草地和树木如同层叠的彩色玻璃形式，山丘如同堆叠的玻璃面板，太阳则如同发光的圆形彩绘玻璃元素。一切都必须感觉空间感、连贯性、发光感和手工制作感，有深度，以及观众可以在三维空间中移动的感觉。摄像机能够在场景中自由穿行，仿佛在行走或滑行于这座3D彩绘玻璃世界之中。保持世界美丽、魔幻，且始终保持一致的风格。绝对任何东西都必须始终由彩绘玻璃或水晶制成，包括草地、河水、天空、云朵、花朵、树木、山丘、太阳以及所有可见表面。不要引入任何自然的现实纹理。没有真实的草地、没有真实的水、没有正常的天空，也不要在彩绘玻璃宇宙之外的任何现实主义。不要出现文字、现代物体或超出彩绘玻璃宇宙的任何现实主义。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/U2fgq2F4J18EL3hC/wm_genie4_demo_dragon_flight_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: Immersive first-person POV, we only see the big strong hands of the knight rider tightening the reins, dragon and wings. Photorealistic, ultra-realistic action-camera footage seen entirely through the rider's own eyes while riding a gigantic black dragon at 140 km/h through a mountainous dragon-racing course with many dragons and riders. Other dragons are mounted by other knights. The camera IS the rider's eyes. The camera is attached to the rider's head, facing forward, and moves naturally with the rider's head. The rider is the viewer. The rider's face, head, torso, body, and full silhouette are NEVER visible. No third-person shots, no external camera angles, no cutaways, no views of the rider from behind or from the side. Only show what the rider would naturally see: the dragon's neck and occasional parts of its upper back near the bottom edge of the frame, the rushing landscape, two other dragons and their riders racing alongside and ahead, and a huge castle with catapults on its walls. A standard is carried naturally by the rider and may occasionally appear at the edge of the frame, but never blocks the view or fills the frame. The camera maintains this exact first-person perspective throughout the entire flight. Aggressive high-speed racing, powerful realistic wingbeats, aerodynamic weight, intense wind, natural head movement, subtle camera vibration, wide-angle action-camera distortion, realistic motion blur, cinematic natural lighting, physically believable movement. Strict visual constraints: true first-person rider POV, no visible rider, no third-person perspective, no external tracking shot, no drone camera, no over-the-shoulder shot, no cinematic cutaways, no camera floating outside the rider's body, no CGI appearance, no video game look, no 3D-render aesthetic. Audio: deep thunderous wingbeats, roaring high-altitude wind gusts, distant volcanic rumble, and crackling flame embers.

沉浸式 first-person POV，我们只能看到骑手的大手紧握缰绳，连接龙的头部和翅膜。Photorealistic, ultra-realistic action-camera footage seen entirely through the rider's own eyes while riding a gigantic black dragon at 140 km/h through a mountainous dragon-racing course with many dragons and riders。Other dragons are mounted by other knights。The camera IS the rider's eyes。The camera is attached to the rider's head, facing forward, and moves naturally with the rider's head。The rider is the viewer。The rider's face, head, torso, body, and full silhouette are NEVER visible。No third-person shots, no external camera angles, no cutaways, no views of the rider from behind or from the side。Only show what the rider would naturally see: the dragon's neck and occasional parts of its upper back near the bottom edge of the frame, the rushing landscape, two other dragons and their riders racing alongside and ahead, and a huge castle with catapults on its walls。A standard is carried naturally by the rider and may occasionally appear at the edge of the frame, but never blocks the view or fills the frame。The camera maintains this exact first-person perspective throughout the entire flight。Aggressive high-speed racing, powerful realistic wingbeats, aerodynamic weight, intense wind, natural head movement, subtle camera vibration, wide-angle action-camera distortion, realistic motion blur, cinematic natural lighting, physically believable movement。Strict visual constraints: true first-person rider POV, no visible rider, no third-person perspective, no external tracking shot, no drone camera, no over-the-shoulder shot, no cinematic cutaways, no camera floating outside the rider's body, no CGI appearance, no video game look, no 3D-render aesthetic。Audio: deep thunderous wingbeats, roaring high-altitude wind gusts, distant volcanic rumble, and crackling flame embers。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/MiidpBWn_XH7Tf66/wm_genie4_demo_motorcycle_hero_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: A cinematic macro close-up from a 1995 Hong Kong indie romantic drama, shot on 35mm film. Two young, unconventional-looking Korean lovers in their 20s ride a motorcycle across a bridge on the outskirts of Hong Kong at dawn. The male driver wears no helmet, looking around anxiously, while the pale-skinned female passenger wears an open-face helmet. Their faces dominate the foreground, large and overlapping, with natural skin texture and subtle expressions of worry and tenderness. Low-angle panoramic composition, framed by solid black bars. Shallow depth of field, blurred road receding behind them, orange streetlights streaking past, and a dark green dusk sky. Intimate, imperfect, melancholic 35mm film aesthetic. One continuous shot.

这是一部从1995年香港独立浪漫戏剧拍摄的电影级 macro close-up，胶片拍摄于 35mm。二十出头、非传统长相的韩国情侣在黎明时分骑行摩托车穿越位于香港郊外的桥梁。男性驾驶员未戴头盔，焦急地环顾四周，而皮肤苍白的女性乘客戴着开面头盔。她们的脸占据前景，大而重叠，皮肤纹理自然，略带担忧和温柔的表情。低角度全景构图，被实心黑条框定。浅景深，模糊的道路在他们身后退去，橙色路灯穿射而过，以及深绿色的黄昏天空。亲密、不完美、忧郁的 35mm 胶片美学。一个连续镜头。

> ### Simulating complex events with Gemini models

### 使用 Gemini 模型模拟复杂事件

> Bringing Gemini and Genie 4 together adds a new layer of reasoning to world simulation, allowing us to model complex, multi-step events and test how AI systems navigate different environments before bringing them to the real world.

将 Gemini 与 Genie 4 结合，为世界模拟 （world simulation）增加了新的推理层，使我们能够建模复杂的多步骤事件，并测试 AI 系统如何在不同环境中导航，然后再将它们带入现实世界 （real world）。

> To achieve this in real-time, Gemini 3.8 Flash serves as a guiding agent in the loop: as Genie 4 generates a world in real-time, Gemini continuously observes the scene, breaks down goals into a sequence of steps, and reviews incoming frames to track the progress and verify that each step succeeded. As the world shifts or the user intervenes, Gemini adapts its plan in the moment, unlocking worlds with reliable causality, procedural behaviors, and multi-step reasoning.

为实现实时效果，Gemini 3.8 Flash 在循环中充当指导 agent：随着 Genie 4 实时生成世界，Gemini 持续观察场景，将目标分解为一系列步骤，并审查传入的帧以跟踪进度并验证每个步骤是否成功。随着世界变化或用户干预，Gemini 即时调整其计划，从而解锁具有可靠因果性、程序化行为和多步推理的世界。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/lh6-ABDF7flJ3HcQ/wm_genie4_demo_robotics_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: Universal Robots UR5 holds a pipette and dispenses liquid into a lab plate, triggering tiny electric sparks.

Universal Robots UR5 握持移液管，向实验皿中注入液体，引发微小电火花。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/FLbHGJDuL6wvFcdv/wm_genie4_demo_1p_magician_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: A REAL, ultra-photorealistic, high-end 35mm cinematic first-person perspective (POV) experience set inside an opulent, claustrophobic antique salon, strictly avoiding any video game, CGI, or digital render aesthetic. Real place, cinema, not render. POV & Foreground Wand: Authentic first-person perspective looking down along the player's physical right hand, which firmly grips an ornate, hand-carved hardwood and polished brass wizard wand pointing into the room. The player's skin exhibits realistic pores, skin creases, cuticle texture, and natural muscle tension under ambient room light. The wand displays fine wood grain, tiny varnish micro-cracks, cold metallic brass inlays, and tactile surface wear from handling. Porcelain Menagerie & Room Architecture: A suffocating, baroque-style gallery packed floor-to-ceiling with thousands of fragile, life-sized and miniature glazed porcelain animals. Glistening ceramic peacocks with intricate feather patterns and vibrant cobalt and emerald enamels, regal porcelain dogs, and curled porcelain cats perched on marble mantels, mahogany display shelves, and velvet-draped pedestals. The surfaces showcase authentic high-gloss ceramic glazing, micro-crazing cracks in the enamel, delicate bone china translucency, and natural dust gathering in the crevices. Cinematic Optics & Lighting: Shot on high-end anamorphic 35mm film lenses. Natural optical characteristics featuring shallow depth of field, subtle barrel distortion, realistic optical lens flares, fine organic film grain, and creamy bokeh in the background. Natural daylight streams through tall, grime-streaked Victorian lace curtains, casting soft volumetric dust motes and creating sharp, physically accurate specular highlights across the glossy curved porcelain glazes. Dynamic Movement & Physical Interaction: Continuous, smooth handheld POV traversal. The player subtly sweeps and points the wand toward the ceramic figures, causing realistic micro-vibrations in the frame as footsteps tread across creaking hardwood floorboards. The figures remain frozen in immaculate, fragile stillness, catching shifting highlights as the wand moves. Acoustic Atmosphere: Raw, immersive documentary-grade audio. Faint floorboard creaks underfoot, distant room tone, quiet breathing, the subtle dry friction of fingers adjusting their grip on the wooden wand, and the delicate, crystalline clinking resonance of fine porcelain vibrating faintly in the quiet air. A real magician stands beside a tall wooden table. On the table is a large rectangular wooden box, completely open at the top, with no lid. A real peacock stands calmly inside the box. Exceptional production design, sophisticated art direction, cinematic lighting, natural but carefully controlled light, realistic skin tones, beautiful contrast, subtle shadows, rich textures, elegant composition, shallow depth of field, high-end cinema camera, realistic human actors, extremely photorealistic. It should look like a frame from a prestigious, beautifully shot modern TV series: understated, expensive, cinematic and completely believable. No theater, no stage, no fantasy, no cartoon, no plastic-looking people, no CGI look.

一个真实、超写实、高端的 35mm 电影级第一人称视角（POV）体验，场景设定在一个奢华、幽闭的古董沙龙内部，严格杜绝任何电子游戏、CGI 或数字渲染的美学感。真实场景，电影质感，非渲染产出。

**POV 与前景魔杖**：真实的第一人称视角，沿着玩家的右手向下俯瞰，右手紧握一根华丽的手工雕刻硬木与抛光黄铜制成的巫师魔杖，杖尖指向室内。玩家皮肤在环境光下呈现真实的毛孔、皮纹、指甲纹理与自然肌肉张力。魔杖展现出细腻的木纹、微小的清漆龟裂、冰冷的黄铜镶嵌，以及长期把玩留下的触感磨损痕迹。

**瓷器动物园与室内建筑**：一个令人窒息的巴洛克风格展厅，从地板堆砌至天花板，摆满了成千上万尊易碎的等身大与微型釉面瓷器动物。羽纹繁复、釉彩呈现活力钴蓝与祖母绿的釉面孔雀、威严的瓷犬、蜷卧在大理石壁炉架、红木陈列架与天鹅绒垫座上的瓷猫。器物表面呈现真实的高光釉面、釉面微微的开片纹路、骨质瓷特有的半透光质感，以及褶皱间自然沉积的灰尘。

**电影光学与布光**：采用高端变形宽银幕 35mm 胶片镜头拍摄。呈现天然光学特性：浅景深、微微的桶形畸变、真实的光学镜头眩光、细腻有机的胶片颗粒，以及背景中奶油般柔和的散景。自然日光透过高大、布满污垢的维多利亚式蕾丝窗帘洒入，形成柔和的体积光尘埃，并在釉面光滑弯曲的瓷器表面投射出锐利、物理准确的镜面高光。

**动态移动与物理交互**：持续、流畅的手持 POV 移动。玩家手持魔杖微微扫视、指向瓷器雕像，脚步踩在吱呀作响的硬木地板上，画面产生真实的微震动。雕像依然凝固在完美、脆弱的静止中，仅随着魔杖移动捕捉到流动的高光变化。

**声学氛围**：原始、沉浸式的纪录片级音频。脚下微弱的地板嘎吱声、远处的空间底噪、安静的呼吸声、手指调整握持木质魔杖时微妙的干摩擦声，以及细瓷在静谧空气中微振产生的清脆、晶莹的共鸣余音。

一位真实的魔术师站在一张高大的木桌旁。桌上放着一个大型长方形木箱，箱口完全敞开，无盖。一只真孔雀安静地站在箱内。

卓越的美术设计、精致的艺术指导、电影级布光、自然且经精心控制的光线、真实肤色、优美对比、微妙阴影、丰富质感、典雅构图、浅景深、高端电影机、真人演员、极致照实感。画面应如同一部享有盛誉、拍摄精美的现代剧集截帧：内敛、质感高级、电影感十足且完全可信。无戏剧舞台感、无舞台剧感、无奇幻感、无卡通感、无塑料感人物、无 CGI 感。

 <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/ivd7jo-kiif9gXGt/wm_genie4_demo_crane_UI_with_disclaimer_16x9_final.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Prompt: crowned crane walks across the snow beneath the clear dusk gradient sky. Natural colors in a documentary style.

天鹅步行穿过清晨的雪地，背景是渐变的晴朗黄昏天空。自然色调，纪录片风格。

> As part of exploring this capability, we have also been experimenting with Gemini 4 Argon and Genie 4 to bring our frontier research together with [Gemini Robotics](https://deepmind.google/models/gemini-robotics/).

作为探索这一能力的一部分，我们也一直在尝试 Gemini 4 Argon 和 Genie 4，将我们的前沿研究与 [Gemini Robotics](https://deepmind.google/models/gemini-robotics/) 结合起来。

> In the example below, Argon breaks down a user-instructed task into steps for Genie to render. These steps are interleaved as text captions to Genie 4 as the simulation is rendering. Because Genie 4 can be steered in real-time with text captions using Gemini, this now unlocks the path of adapting the simulation as it progresses towards the completion of that task. This capability becomes a path for simulating a breadth of scenarios in imagined worlds, using Gemini 4 Argon and Genie 4.

在下面的示例中，Argon 将用户指导的任务分解为步骤，供 Genie 渲染。这些步骤在模拟渲染过程中作为文本字幕交错提供给 Genie 4。因为 Genie 4 可以利用 Gemini 的文本字幕进行实时引导，这为随任务推进动态调整模拟开辟了路径。这种能力成为在想象世界中模拟多样化场景的途径，利用 Gemini 4 Argon 与 Genie 4 实现。

  <video controls=""><source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/jsLTAn-laUIpto1B/Genie-4_Robotics-demo_light.webm#t=0.1" type="video/webm"> <source data-src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/oxCFeWXzOz5FcyoN/Genie-4_Robotics-demo_dark.webm#t=0.1" type="video/webm"> Your browser does not support the video tag.</video>

> Gemini 4 Argon and Genie 4 work together to simulate Apptronik's Apollo humanoid playing a game of checkers, breaking the task down into real-time steps.

Gemini 4 Argon 和 Genie 4 协同工作，模拟 Apptronik's Apollo 人形机器人玩 checkers，将任务分解为 real-time 步骤。

> ## Learnings from trusted testers

## 来自受信任测试人员的经验教训

> While Genie 4 is a major research milestone, it remains an early, experimental model. To understand how interactive world models can support real-world workflows—and where they still need to grow—we’ve been working with cohorts of trusted testers across creative industries, journalism, education, gaming, and engineering.

尽管 Genie 4 是一个重大研究里程碑，但它仍是一个早期的实验性模型。为了理解互动世界模型如何支持现实世界的工作流——以及它们仍需成长的地方——我们一直在与跨创意、新闻、教育、游戏和工程领域的受信测试者群体合作。

> Testers highlighted how the leap in photorealism, native audio, and real-time steering allows ideas and concepts to be turned into realistic simulations, unlocking new abilities across disciplines:



测试人员强调了在照片级真实感、原生音频和实时控制方面的飞跃如何使想法和概念转化为逼真的模拟，从而跨学科解锁了新的能力：

> - **Creative direction**: Creatives and technologists are testing Genie 4 as a rapid "draft mode" for pre-visualization and ideation. For example, filmmakers can step into a live simulation of a scene and run multiple "takes" in real-time, adjusting camera angles, lighting, dialogue, and action on the fly.
> - **Historical scenarios & immersive photographs**: Photojournalists are exploring how a single 2D archival photograph can become a grounded simulation of that environment in seconds. Teams are testing how populated, dynamic worlds can help experience historical spaces or visualize how short-term environmental events, like a flash flood or wildfire, unfold.
> - **Interactive experience concept design**: Game developers and creative technologists are testing Genie 4 to go from an initial idea to an explorable prototype in seconds, testing visual styles, material aesthetics, and interactive mechanics through natural language prompts before writing a single line of engine code.
> - **Simulation**: Aside from our robotics research, enterprise partners across industries are evaluating Genie 4 as a tool for rapid "zero-to-one" scenario generation, and identifying gaps to further improve Genie to best fulfill that simulation need.

# Creative direction

创意师和技术人员正在将 Genie 4 作为快速"草稿模式"进行测试，用于预视觉化和头脑风暴。例如，电影制作者可以进入场景的实时模拟中，实时运行多个"镜头"，在飞行中调整镜头角度、灯光、对白和动作。

# Historical scenarios & immersive photographs

摄影记者正在探索单张二维档案照片如何在几秒钟内成为该环境的真实模拟。团队正在测试如何通过人口密集、动态的世界来体验历史空间，或可视化短期环境事件（如暴雨或野火）如何展开。

# Interactive experience concept design

游戏开发者和创意技术人员正在测试 Genie 4，从最初的想法到可探索的原型只需几秒钟，通过自然语言提示测试视觉风格、材质美学和交互机制，写代码之前。

# Simulation

除了我们的机器人研究，跨行业的企业合作伙伴正在评估 Genie 4 作为快速"零到一"场景生成的工具，并识别需要进一步改进 Genie 的差距，以最好地满足模拟需求。

> ## Future Work: Towards hybrid world models

## 未来工作: 面向混合世界模型

> A promising path for future progress lies in hybrid world models, which combine the logical, structured reasoning of code and language models with the rich, sensory representation of pixel-level simulation.

未来发展的一个极具前景的方向在于混合世界模型，该模型将代码与语言模型的逻辑性、结构化推理能力，与像素级模拟的丰富感官表征相结合。

> Bringing Genie and Gemini models closer together is an early step in this direction. Gemini works behind the scenes to map the structure and plan the narrative timeline, while Genie generates the immediate physical reality—rendering how the world looks, sounds, and responds, pixel by pixel. Together, these complementary strengths can unlock a new class of world models that are far more coherent, controllable, and grounded than either approach could achieve alone.

将 Genie 和 Gemini 模型更紧密地结合，是朝着这一目标迈出的第一步。Gemini 在幕后负责构建结构并规划叙事时间线，而 Genie 则负责生成即时物理现实——逐像素地渲染世界的视觉、听觉和交互效果。它们的互补优势结合起来，可以创造出一种全新的世界模型，这种模型将比任何单一方法都更加连贯、可控和真实。

> ## Building world models responsibly

##  负责任地构建 world models

> Genie 4 marks a new area of frontier research that merges real-time generation and photorealism, introducing a new range of capabilities and dimensions that we want to roll out and explore in a responsible way. Genie 4 includes strict safety guardrails that are consistent with our safety policies across other models. Before launching this preview, we evaluated Genie 4 through internal rigorous safety evaluations to prevent the generation of harmful or malicious content. Also, we have intentionally deployed it first to trusted tester partners to get early feedback, before we release the model more broadly.

Genie 4 开创了前沿研究的新领域，将实时生成与照片级真实感相结合，引入了新的一组能力与维度，并计划负责任地发布和探索。在推出这一预览版之前，我们通过严格的内部安全评估以防止生成有害或恶意内容。此外，我们还故意先将其部署给可信的测试合作伙伴，以便获取早期反馈，然后再更广泛地发布模型。

> To maintain transparency, all video and audio generated by Genie 4 will include SynthID, our imperceptible digital watermarking technology that helps identify AI-generated content across visual and audio modalities.

为确保透明性，Genie 4 生成的所有视频和音频将包含 SynthID，我们的不可感知数字水印技术有助于跨视觉和音频模态下识别 AI 生成的内容。

> ## Understanding current limitations

## 理解当前的局限性

> Genie 4 remains an early, evolving area of research.

Genie 4 仍然是一个早期、不断发展的研究领域。

> While it can maintain coherent environments over short sessions, visual details and object permanence can still shift or drift over time—especially as a simulation runs longer, after multiple complex prompt edits, or when navigating throughout the scene. Complex physical interactions, real-time audio accuracy, rendering legible text, spatial accuracy, and long-term consistency are active areas of ongoing research. We are sharing Genie 4 as a preview to learn alongside our community and safely advance the frontier of interactive simulation.

虽然它能够在短期内保持环境的一致性，但视觉细节和物体永久性仍可能随时间发生变化，尤其是在模拟运行较长时间、多次进行复杂提示编辑或在场景中导航时。复杂的物理交互、实时音频准确性、可读文本渲染、空间精度和长期一致性都是当前的活跃研究领域。我们发布 Genie 4 预览版，旨在与社区共同学习，安全地推动交互式模拟技术的发展。

> ## Next steps for Genie 4

## Genie 4 的下一步计划

> Genie 4 has been released as a research preview to trusted testers, and is coming soon to Google AI Ultra subscribers in Project Genie and early access partners in the Gemini API and Google AI Studio. Join the waitlist for Genie 4 in Project Genie [here](https://forms.gle/WQnSNEM3omF7Uruu7).



Genie 4 已作为研究预览版向可信测试者发布，即将面向 Project Genie 中的 Google AI Ultra 订阅用户以及 Gemini API 和 Google AI Studio 的早期访问合作伙伴推出。点击此处加入 Project Genie 中 Genie 4 的等待列表。

> We’re excited for users to step inside, experiment, and build their own interactive worlds soon.

我们为用户即将踏入、实验并构建自己的交互式世界感到兴奋。

> ## Acknowledgements

## 谢谢

> Genie 4 was made possible by core contributions from Hang Qi, Diego Rivas, Aleksander Hołyński, Inbar Mosseri, Jack Parker-Holder, Shlomi Fruchter, Tejas Kulkarni, James Assiene, Philip Ball, Jakob Bauer, Eddie Cao, Lucy Chai, Harris Chan, Kleopatra Chatziprimou, Hao Chen, Yoni Choukroun, Mark Collier, Enric Corona, Kurtis David, Ariel Ephrat, Maxime Gazeau, Ruiqi Gao, Chelsee Glover-Odom, Liangke Gui, Swaroop Guntupalli, Shan Han, Tingbo Hou, Jiri Hron, Hui Huang, Drew A. Hudson, Zhouyuan Huo, Linyi Jin, Christos Kaplanis, Dhrupad Karwa, Eunyoung Kim, Congtao Kuang, Eliot Laidlaw, José Lezama, Hao Li, Shuang Li, Yuchen Liu, Hanzi Mao, Mark Matthews, Matt McGill, Kay McKinney, Ricardo Monti, Mark Murphy, Joseph Ortiz, Roni Paiss, Frank Perbet, Ben Poole, Tal Reiss, Konstantinos Rematas, Guy Scully, Jeremy Shar, Shashank Shastry, Sri S, Omer Tov, Ruben Villegas, Andrey Voynov, Hongjie Wang, Luyu Wang, Kaustubh Sridhar, Mo Samsami, Stephen Spencer, Yufei Wang, Will Whitney, Rundi Wu, Joyce (Jingjing) Xie, Jesse Yin, Shiran Zada, Serena Zhang, Xiaofan Zhang, Zhengqi Li, Zhixing Zhang, Yuan Zhong, Shuo-yiin Chang, Dmitry Lagun, Ronny Huang, Yao Su, Ankush Gupta, Genzhi Ye, Haolin Jia, Weiqin Wang, Xi Xiong, Salah Zaiem, Carol Zheng,.



Genie 4 得益于以下核心贡献者的努力：Hang Qi、Diego Rivas、Aleksander Hołyński、Inbar Mosseri、Jack Parker-Holder、Shlomi Fruchter、Tejas Kulkarni、James Assiene、Philip Ball、Jakob Bauer、Eddie Cao、Lucy Chai、Harris Chan、Kleopatra Chatziprimou、Hao Chen、Yoni Choukroun、Mark Collier、Enric Corona、Kurtis David、Ariel Ephrat、Maxime Gazeau、Ruiqi Gao、Chelsee Glover-Odom、Liangke Gui、Swaroop Guntupalli、Shan Han、Tingbo Hou、Jiri Hron、Hui Huang、Drew A. Hudson、Zhouyuan Huo、Linyi Jin、Christos Kaplanis、Dhrupad Karwa、Eunyoung Kim、Congtao Kuang、Eliot Laidlaw、José Lezama、Hao Li、Shuang Li、Yuchen Liu、Hanzi Mao、Mark Matthews、Matt McGill、Kay McKinney、Ricardo Monti、Mark Murphy、Joseph Ortiz、Roni Paiss、Frank Perbet、Ben Poole、Tal Reiss、Konstantinos Rematas、Guy Scully、Jeremy Shar、Shashank Shastry、Sri S、Omer Tov、Ruben Villegas、Andrey Voynov、Hongjie Wang、Luyu Wang、Kaustubh Sridhar、Mo Samsami、Stephen Spencer、Yufei Wang、Will Whitney、Rundi Wu、Joyce (Jingjing) Xie、Jesse Yin、Shiran Zada、Serena Zhang、Xiaofan Zhang、Zhengqi Li、Zhixing Zhang、Yuan Zhong、Shuo-yiin Chang、Dmitry Lagun、Ronny Huang、Yao Su、Ankush Gupta、Genzhi Ye、Haolin Jia、Weiqin Wang、Xi Xiong、Salah Zaiem、Carol Zheng。

> Genie 4 also required close collaborations across partner teams, we thank all our cross-functional partners that made this launch possible: Dina Bashkirova, Emil Bergner, Greta Borisko, Irina Blok, Melissa Byun, Gabe Clapper, Viral Carpenter, Michael Y. Chang, Maximo Cudich-Sieburger, Chloe Doan, Alisa Fortin, Shivani Ghanta, Vikram Gopali, Ezra Gorman, Khyatti Gupta, Sam Hasinoff, Philipp Henzler, Hector Hinestroza, Ed Hirst, Tyler Holland, Kristian Holsheimer, Tiffany Hu, Kapil Joshi, Randeep Katari, Pavan Kumar, Vikhyat Kumeria, Sam Kvaalen, Matthew Levine, Yinxiao Li, Yuchi Liu, Miao Luo, Nick Matarese, Kangfu Mei, Signe Nørly, Moises Oliveira, Eric Paskie, Manika Puri, Susanna Ricco, Andrey Ryabtsev, Cai Schumann, Nicole Brichtova, Andy Sekyere, Grace Shih, Melissa Smith, Duncan Noble Smith, Kenda Stewart, Rod Strougo, Jenn Sturgeon, Amy Zeng, Gaby Pearl, Eleanor Tomlinson, Kenyon Watson, Inês Ayer, Luke Talbot, Han-Yun Tsao, Guillaume Vernade, Karen Wang, Changchang Wu, Ian Wilkinson, Weijuan Xi, Jennifer Yick, Yunhan Zhao, Eric Zhang, Jason Zhang, Annie Zhou, James Zhou, Chris Walker, Alan Yam, Alex Chen, Cliff Lungaretti, Dan Motzenbecker, Kaloyan Kolev, Matthew Carey, Nate Zucker, Sam Lawton, Shashwath Santosh, Suz Chambers.



Genie 4 同样需要跨合作伙伴团队的紧密合作，我们感谢所有促成此次发布的跨职能合作伙伴：Dina Bashkirova, Emil Bergner, Greta Borisko, Irina Blok, Melissa Byun, Gabe Clapper, Viral Carpenter, Michael Y. Chang, Maximo Cudich-Sieburger, Chloe Doan, Alisa Fortin, Shivani Ghanta, Vikram Gopali, Ezra Gorman, Khyatti Gupta, Sam Hasinoff, Philipp Henzler, Hector Hinestroza, Ed Hirst, Tyler Holland, Kristian Holsheimer, Tiffany Hu, Kapil Joshi, Randeep Katari, Pavan Kumar, Vikhyat Kumeria, Sam Kvaalen, Matthew Levine, Yinxiao Li, Yuchi Liu, Miao Luo, Nick Matarese, Kangfu Mei, Signe Nørly, Moises Oliveira, Eric Paskie, Manika Puri, Susanna Ricco, Andrey Ryabtsev, Cai Schumann, Nicole Brichtova, Andy Sekyere, Grace Shih, Melissa Smith, Duncan Noble Smith, Kenda Stewart, Rod Strougo, Jenn Sturgeon, Amy Zeng, Gaby Pearl, Eleanor Tomlinson, Kenyon Watson, Inês Ayer, Luke Talbot, Han-Yun Tsao, Guillaume Vernade, Karen Wang, Changchang Wu, Ian Wilkinson, Weijuan Xi, Jennifer Yick, Yunhan Zhao, Eric Zhang, Jason Zhang, Annie Zhou, James Zhou, Chris Walker, Alan Yam, Alex Chen, Cliff Lungaretti, Dan Motzenbecker, Kaloyan Kolev, Matthew Carey, Nate Zucker, Sam Lawton, Shashwath Santosh, Suz Chambers.

> Thanks to Raia Hadsell, Aäron van den Oord, Josh Woodward, Steve Seitz, Carlos Hernandez, Elias Roman, Jung E. Kim, Abhishek Bapna, Eli Collins, Tulsee Doshi, Carolina Parada, Jie Tan, Koray Kavukcuoglu and Demis Hassabis for their insightful guidance and support throughout the research process.

感谢 Raia Hadsell、Aäron van den Oord、Josh Woodward、Steve Seitz、Carlos Hernandez、Elias Roman、Jung E. Kim、Abhishek Bapna、Eli Collins、Tulsee Doshi、Carolina Parada、Jie Tan、Koray Kavukcuoglu 和 Demis Hassabis 在整个研究过程中给予我们宝贵的指导和支持。

> Lastly, we thank our trusted tester and early access users that have provided feedback to help guide our research forward.

最后，我们感谢我们的可信赖测试者和早期访问用户，感谢他们提供反馈，帮助推动研究向前发展。
