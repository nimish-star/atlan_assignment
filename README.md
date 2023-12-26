## Introduction

The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.

The detailed Problem Statement is also mentioned towards the end of this document.


## ⏱ Page Load Time

The Webapp loads in about 0.4 s to 0.6s. This is calculated by using Google Lighthouse tool in Chromium based browsers. 
*NOTE: The Lighthouse Audits scores are decreased because of preinstalled browser extensions that are non-removable in my system.*

## 🪜 Steps I took to optimize the page load time

- Used `.webp` assets instead of `.png` or `.jpeg` to minmizing loading time.
- Used SVG icons wherever possible as they are lighter than image type icons.
- Used PurgeCSS to tree-shake unused styles and optimize my final build size.
- Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
- Used netlify that has world-class CDN technology that reduces waiting time even further.

