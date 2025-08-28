---
layout: outcome-project
title: "About an AI-assisted mobile solution to reliably diagnose Obstructive Sleep Apnea (OSA)" 
fellow: "Dung Vu" 
summary: Obstructive sleep apnea (OSA) occurs due to improper functioning of the upper respiratory tract. When the muscles of the hard palate in the back of the throat that supports the soft palate relax...
link:
format: 
date: 2025-08-16
tags: 
---
# 1. Introduction
Obstructive sleep apnea (OSA) occurs due to improper functioning of the upper respiratory
tract. When the muscles of the hard palate in the back of the throat that supports the soft palate
relax, the soft palate blocks the passage of air to the respiratory system. This leads to stoppage
of breathing for short durations.  

Obstructive sleep apnea is classified by severity:  
1. **Severe OSA**: Apnea–hypopnea index (AHI) is greater than 30 (more than 30 episodes per hour).  
2. **Moderate OSA**: AHI is between 15 and 30.  
3. **Mild OSA**: AHI is between 5 and 15.  

To correctly diagnose OSA, an in-person sleep-lab is required, or at least, an at-home test kit. In either way, a sleep doctor is required to determine if the patient has OSA.  

Literature has indicated that using biomarkers such as ECG and SPO2, collected from sensors, AI-based approaches can diagnose OSA with sufficient accuracy. ECG, SPO2 and other vital biomarkers can be measured by wearable devices. This opens the possibility that an AI mobile solution can help reliably diagnose OSA without participation of medical professionals.  

# 2. Current Technologies for Diagnosis of Sleep Apnea
The **polysomnography (PSG)** test is the gold standard for sleep apnea detection, conducted
in dedicated sleep labs under trained supervision. The test monitors upper airway flow, respiratory effort, and parameters such as **EEG, ECG, and SPO2**.  

Parameters derived from these signals include:  
- Heart Rate Variability (HRV)  
- ECG derived respiration (EDR)  
- Cardiopulmonary coupling (CPC)  
- Ballistocardiography (BCG)  

Two important indexes: **Apnea–hypopnea index (AHI)** and **Respiratory Disturbance Index (RDI)** ascertain the presence of sleep apnea.  

Other diagnostic technologies:  
- **Snap Diagnostics**: Home sleep test kit (airflow, oximetry, heart rate, respiratory effort, sound). Still requires Rx and sleep technicians.  
- **WatchPat-One**: Disposable kit with wrist sensor, pulse oximeter, chest sensor. Data is sent electronically to a sleep doctor.  
- **Mobile apps**: Snorelab, Sleep Tracker, Sleep Cycle, Sleep as Android, etc. (sound-based detection).  

Research question: Can AI mobile solutions using biomarkers like ECG and SPO2 reliably diagnose OSA **without medical professionals**?  

# 3. ECG, SPO2 and Convolution Neural Network Classification (CNN)
Among biomarkers, **ECG and SPO2** are vital:  
- ECG: rhythm of heartbeats, blood flow.  
- SPO2: oxygen saturation levels.  

Studies show that either ECG, SPO2, or their combination can detect OSA. Even single-lead ECG can detect OSA with **85–99% accuracy** [2–5].  

**1D-CNN** is particularly suited:  
- Works well for 1-D signals like ECG, SPO2.  
- Fewer classification parameters than 2D-CNN.  
- More efficient training and classification.  
- Suitable for IoT devices.  

Reported 1D-CNN accuracies:  
- Alarcón et al [7]: 84.3%  
- Yusra et al [8]: 98.22%  
- Yeh et al [9]: 88.6%  
- Chang et al [10]: 87.9%  
- Arlene John [10]: 99.56%  

# 4. Case Study: A 1D-CNN Based Deep Learning Technique for Sleep Apnea Detection in IoT Sensors
**Reference**: John, Cardiff, and John [5]. Accuracy: **99.56%**.  
Model: Three 1D-CNN layers, 2 Max pooling layers, 1 MLP layer. Total: **50,848 trainable parameters**.  

### a. Method
- 11-second window. OSA = no breath ≥10 sec.  
- Overlapping windows (11 sec with 10 sec overlap).  
- A window is apneic if 2nd sec is apneic.  

### b. Data Set
- 25 patients (UCD St. Vincent’s Hospital) [11].  
- Training:Validation:Test = 8:1:1.  

### c. Classification Model
Models tested: 2, 4, and 5 layer 1D-CNNs vs 3-layer baseline.  

**Five 1D-CNN model architecture**:
Input (1408 nodes)
Batch Normalization (4 params)
1D-CNN (3, kernel=100, stride=2) → 303 params → ReLU → Max Pooling (2)
1D-CNN (50, kernel=10, stride=2) → 1550 params → ReLU → Max Pooling (2)
1D-CNN (50, kernel=10, stride=2) → 25050 params → ReLU → Max Pooling (2)
1D-CNN (30, kernel=30, stride=2) → 45030 params → ReLU → Max Pooling (2)
1D-CNN (30, kernel=30, stride=2) → 27030 params → ReLU → Max Pooling (2)
Batch Normalization (120 params)
Dropout = 0.25
Flatten
Dense (2, Softmax) → 1022 params

### d. Model Training at SDSC’s Expanse
Command line or interactive JupyterLab:  
```bash
#!/bin/bash
export PATH="/cm/shared/apps/sdsc/galyleo:${PATH}"
cd ~/df-parallel
galyleo launch --account <account> --partition gpu-shared --cpus 16 --gpus 1 --memory 128 \
--time-limit 24:00:00 --conda-env df-parallel-gpu --conda-yml environment-gpu.yml
```

Example Jupyter URL: 
https://connected-pension-reactor.expanse-user-content.sdsc.edu?token=557f86bd5912e20b3742633de25603a3

e. Classification Results
Model	Trainable Params	Accuracy	Sensitivity	Specificity
3 x 1D-CNN (Default)	50,847	99.50%	99.57%	97.08%
2 x 1D-CNN	12,037	93.87%	94.38%	74.00%
4 x 1D-CNN	73,377	99.54%	99.59%	97.88%
5 x 1D-CNN	100,047	99.65%	99.72%	96.92%

# 5. Proposal for an AI-assisted Mobile Solution

Model building:

- Build/train with Sleep Apnea Repository data (ECG, SPO2, respiratory).

- Needs large datasets + computing resources.

- Accuracy target: near 100%.

- Classification outputs: YES / NO / UNKNOWN (if unknown → refer to doctors).

Diagnosis app:

- Mobile/wearable/laptop solution.

- Uses ECG, SPO2, respiratory data.

- If insufficient local resources → pre-process + send to server.

- Requires user consent for data transfer.

# 6. Conclusions

As wearables collect more biomarkers and AI evolves with HPC support, a reliable solution is feasible. Once successful, it could provide affordable, fingertip diagnosis of sleep apnea.

# 7. Acknowledgements

Thanks to the authors of [5], mentors of the NSF-supported CIP program, and SDSC Expanse HPC resources.

# References

Ramachandran A, Karuppiah A. A Survey on Recent Advances in Machine Learning Based Sleep Apnea Detection Systems. Healthcare (Basel). 2021 Jul 20;9(7):914. doi:10.3390/healthcare9070914. PMID:34356293; PMCID:PMC8306425.

D. Dey, S. Chaudhuri, and S. Munshi, Obstructive sleep apnoea detection using convolutional neural network based deep learning framework, Biomedical Engineering Letters, 8(1):95-100, 2018.

Bahrami M, Forouzanfar M. Sleep Apnea Detection From Single-Lead ECG: A Comprehensive Analysis of Machine Learning and Deep Learning Algorithms. IEEE Trans. Instrum. Meas., 71:1-11, 2022. doi:10.1109/TIM.2022.315194.

Obeidat Y, Alqudah AM. A hybrid lightweight 1D CNN-LSTM architecture for automated ECG beat-wise classification. Traitement du Signal, 38(5):1281-1291, 2021. doi:10.18280/ts.380503.

John A, Cardiff B, John D. A 1D-CNN Based Deep Learning Technique for Sleep Apnea Detection in IoT Sensors. IEEE ISCAS 2021, Daegu, Korea. doi:10.1109/ISCAS51556.2021.9401300.

Kiranyaz S, Avci O, Abdeljaber O, Ince T, Gabbouj M, Inman DJ. 1D convolutional neural networks and applications: A survey. Mech. Syst. Signal Process. 151:107398, 2021. doi:10.1016/j.ymssp.2020.107398.

Alarcón ÁS, Madrid NM, Seepold R, Ortega JA. Obstructive sleep apnea event detection using explainable deep learning models for a portable monitor. Front Neurosci. 2023 Jul 14;17:1155900. doi:10.3389/fnins.2023.1155900.

Obeidat Y, Alqudah AM. (2021). A hybrid lightweight 1D CNN-LSTM architecture for automated ECG beat-wise classification. Traitement du Signal, 38(5):1281-1291.

Yeh C-Y, Chang H-Y, Hu J-Y, Lin C-C. Contribution of Different Subbands of ECG in Sleep Apnea Detection. Sensors 22(2):510, 2022. doi:10.3390/s22020510.

Chang H-Y, Yeh C-Y, Lee C-T, Lin C-C. A sleep apnea detection system based on 1D deep CNN using single-lead ECG. Sensors 2020, 20:4157.

UCD Sleep Apnea Dataset, University College Dublin. PhysioBank Database.