# Sicheng Lu &nbsp;&middot;&nbsp; 卢思成

M.S.E. student in [Robotics](https://lcsr.jhu.edu/) at [Johns Hopkins University](https://www.jhu.edu/), working in the
[ARCADE Lab](https://arcade.cs.jhu.edu/) with [Prof. Mathias Unberath](https://mathiasunberath.github.io/).
Previously B.S. in Mechanical Engineering at [UIUC](https://illinois.edu/) and B.Eng. at
[Zhejiang University](https://www.zju.edu.cn/english/), with a minor in ECE.
Applying to PhD programs for Fall 2027.

[Homepage](https://siiichenggg.github.io/) &middot;
[CV](https://siiichenggg.github.io/cv.pdf) &middot;
[Google Scholar](https://scholar.google.com/citations?user=hLtc_3MAAAAJ) &middot;
[Hugging Face](https://huggingface.co/SichengLu) &middot;
[LinkedIn](https://www.linkedin.com/in/sicheng-lu-727b29310/) &middot;
[slu69@jh.edu](mailto:slu69@jh.edu)

---

## Research

I study embodied AI and humanoid robot learning, with the operating room as the driving application:
vision-language navigation, visuomotor policies, sim-to-real transfer, and perception from surgical video to
embodied agents. I have worked on how a humanoid can use a room's ambient cameras to plan and replan its
actions&nbsp;[[1]](#1), and I am now training an end-to-end vision-language navigation policy for the Unitree G1
in a reconstructed operating room, with sim-to-real transfer as the goal. Before that, I built video foundation
models for surgical perception&nbsp;[[2]](#2).

The question I want to work on next: **how can a robot learn in simulated operating rooms and still understand
and act reliably in real ones?**

## Publications

<sup>\* equal contribution</sup>

<a id="1"></a>
**[1] [ActOR: Ambient AI-Based Agentic Orchestration for Humanoid Autonomy in Operating Rooms](https://arxiv.org/abs/2611.04255)** <br>
Han Zhang\*, **Sicheng Lu**\*, Aleks Santari, Jeffrey K. Jopling, Masaru Ishii, Mathias Unberath <br>
*arXiv:2611.04255*, 2026. Under review. <br>
[[arXiv]](https://arxiv.org/abs/2611.04255) [[Project]](https://hanzhang206.github.io/ActOR/)

> An LLM agent plans locomotion and manipulation skills for a Unitree G1 humanoid over a digital twin fused from
> ambient and head cameras, and replans from execution feedback. In simulation, ambient perception cut exploration
> from 1.05 to 0.12 calls per trial for out-of-view targets, and closed-loop feedback raised success from 46.7% to
> 83.3%. In a physical mock OR, the robot completed 14 of 20 single-object disposal trials autonomously.

<a id="2"></a>
**[2] [Scaling Video Pretraining for Surgical Foundation Models](https://arxiv.org/abs/2603.29966)** <br>
**Sicheng Lu**\*, Zikai Xiao\*, Jianhui Wei\*, Danyu Sun, Qi Lu, Keli Hu, Yang Feng, Jian Wu, Zongxin Yang, Zuozhu Liu <br>
*arXiv:2603.29966*, 2026. <br>
[[arXiv]](https://arxiv.org/abs/2603.29966) [[Code]](https://github.com/Siiichenggg/SurgRec) [[Weights]](https://huggingface.co/SichengLu/SurgRec)

> A scalable, reproducible pretraining recipe for surgical video understanding: 10,535 surgical videos
> (214.5M frames), MAE and JEPA variants pretrained with balanced sampling, and a standardized 16-dataset benchmark
> across four clinical domains. SurgRec-MAE gains +3.18 points over VideoMAE and SurgRec-JEPA +2.61 over V-JEPA
> on average.

<a id="3"></a>
**[3] [RustGAN: A Method to Generate Rusty Screw with Physicochemical Constraints](https://doi.org/10.1109/ICAMechS63130.2024.10818721)** <br>
**Sicheng Lu**, Chen Xu, Qiong Lin, Yicong Gao, Zhiliang He <br>
*International Conference on Advanced Mechatronic Systems (ICAMechS)*, pp. 7–12, 2024. <br>
[[DOI]](https://doi.org/10.1109/ICAMechS63130.2024.10818721)

## Code

- **[SurgRec](https://github.com/Siiichenggg/SurgRec)** — official code and pretrained models for&nbsp;[2]: pretraining, evaluation, and the 16-dataset benchmark.
- **[meshmark](https://github.com/Siiichenggg/meshmark)** — browser tool to hand-annotate objects and routes in a scanned room, with linked top-down and 3D views.

## Experience

- **Graduate Researcher**, ARCADE Lab, Johns Hopkins University — Prof. Mathias Unberath &middot; 2026 – present
- **Research Assistant**, ZJU-UIUC Institute, Zhejiang University — Prof. Zuozhu Liu &middot; 2025 – 2026
- **Course Assistant**, Computer Integrated Surgery I, Johns Hopkins University — [Prof. Russell H. Taylor](https://www.cs.jhu.edu/~rht/) &middot; Fall 2026
- **Teaching Assistant**, Introductory Solid Mechanics, ZJU-UIUC Institute &middot; Spring 2024

## Toolbox

Unitree G1 &middot; ZED cameras &middot; Jetson Orin &middot; ROS 2 / Nav2 &middot; Isaac Sim / Isaac Lab &middot; MuJoCo &middot; PyTorch

<details>
<summary><sub>GitHub activity</sub></summary>
<br>
<img height="150em" src="generated/stats.svg" alt="GitHub stats"/>
<img height="150em" src="generated/top-langs.svg" alt="Top languages"/>
</details>
