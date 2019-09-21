# ylab.calendar.vue

## Descriptions
This application is a calendar using chrome extensions. 

### 1. Purpose 
- link email (google, outlook) to ycalendar
- share schedules to anoher platforms
- login with OAuth (google)
- represent d-days and change background images 

### 2. Folder Structure
- backend : 백그라운드로 돌아가야할 스크립트 영역
- content : 실제 돌아가는 컨텐츠 스크립트 영역
- devtools : 새로운 사이드바, UI패널을 생성하거나, 네트워크 요청이나 디버깅을 위한 정보를 얻을 수 있는 영역
- options : (커스터마이징) 사용자에게 옵션을 제공하기 위한 영역
- popup : 크롬 탭에서 아이콘을 눌렀을때 팝업 영역
- tab : 새로운 창을 열어 생성되는 영역
- ext : 공유되는 스크립트 영
- manifest.js : 메니페스트 설정 영역

## Development Environment
``` bash
# install vue-cli
$ npm install -g vue-cli

# create a new project using the template
$ vue init YuraDev/vue-chrome-extension-template my-project

# install dependencies and go!
$ cd my-project
$ npm install # or yarn
$ npm run dev # or yarn dev
```
