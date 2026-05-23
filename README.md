# fix-aistudio-lag

## Issue description
AI Studio introduces massive rendering lags (see purple blocks). The problem gets worse with larger screensizes. 
<img width="1678" height="530" alt="nofix" src="https://github.com/user-attachments/assets/b494fe16-0f07-4c91-9838-9393da5c8ee4" />

This relates to the `backdrop-filter` blurs which force the GPU to repeatedly sample, render and repaint pixels.

## Fix
Fix AI Studio performance overhead with this simple Tampermonkey Userscript. 
