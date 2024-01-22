# Chrome Extension: TuneInTruth

## Overview

Welcome to the TuneInTruth Chrome extension! This extension transforms major headlines on selected Indian newspaper sites into mini rhymes generated based on the original headlines. Additionally, it appends a brief summary of the bias (if any) in the article. The transformed headlines, along with the new rhyming headline, bias summary, and article link, are accessible only after Gmail authentication.

## Supported Newspaper Sites

- [x] The Times of India
- [x] Wion
- [x] ANI
- [x] Indian Express


## Installation

To install the extension, follow these steps:

1. Clone the front-end repository:

   ```bash
   git clone https://github.com/AniModi/TuneInTruth.git
   ```
3. Unpack the dist directory in "chrome://extensions/" after turning on developer mode.


## Update extension

If you made any changes to the extension code, follow these steps to update the code.

1. Build the project:
   
   ```bash
   npm run build
   ```
3. If you have updated the content file, run the above command and reload the extension at the "chrome://extensions/" to update the changes.
