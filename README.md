# Chrome Extension: TuneInTruth

## Overview

Welcome to the TuneInTruth Chrome extension! This extension transforms major headlines on selected Indian newspaper sites into mini rhymes generated based on the original headlines. Additionally, it appends a brief summary of the bias (if any) in the article. The transformed headlines, along with the new rhyming headline, bias summary, and article link, are accessible only after Gmail authentication.

## Supported Newspaper Sites

- [x] The Times of India


## Installation

To install the extension, follow these steps:

1. Clone the front-end repository:
   ```bash
   git clone https://github.com/AniModi/TuneInTruth.git
   ```
2. Navigate to the cloned directory:
   ```bash
   cd rhyme-and-reflect-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```
5. Unpack the dist directory in "chrome://extensions/" after turning on developer mode.
